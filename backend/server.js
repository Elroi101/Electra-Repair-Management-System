import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";


dotenv.config();

async function sendEmailViaBrevo({ to, subject, text, replyTo }) {
  await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: { email: process.env.SENDER_EMAIL, name: "FixIt Repairs" },
      to: [{ email: to }],
      replyTo: replyTo ? { email: replyTo } : undefined,
      subject,
      textContent: text,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    },
  );
}

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const saltrounds = 10;

const app = express();
const port = 3000;

app.use(cors({
  origin: "https://electra-repair-management-system.vercel.app",
  credentials: true,
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my-secret",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const verified = await verifier({ email, password });

        if (!verified) {
          return done(null, false, {
            message: "Invalid credentials",
          });
        }

        const result = await db.query(
          "SELECT name, email, role FROM user_access WHERE email=$1",
          [email],
        );

        return done(null, result.rows[0]);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
  try {
    const result = await db.query(
      "SELECT name,email,role FROM user_access WHERE email=$1",
      [email],
    );

    if (result.rows.length === 0) {
      return done(null, false);
    }

    done(null, result.rows[0]);
  } catch (err) {
    done(err);
  }
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({
    error: "Unauthorized",
  });
}

app.get("/me", ensureAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

app.post("/submit", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);

    if (!user) {
      return res.json({
        isVerified: false,
      });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      return res.json({
        isVerified: true,
        user,
      });
    });
  })(req, res, next);
});
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

try {
    await sendEmailViaBrevo({
      to: process.env.SHOP_EMAIL,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "not provided"}\n\nMessage:\n${message}`,
    });
    res.json({ success: true });
  } catch (er) {
    console.log(er?.response?.data || er);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Session destruction failed" });
      }

      res.clearCookie("connect.sid");

      res.json({
        success: true,
      });
    });
  });
});

app.post("/modal", ensureAuthenticated, async (req, res) => {
  await client_logger(req.body);
  res.send(null);
});
app.patch("/updateModal", ensureAuthenticated, async (req, res) => {
  await client_updater(req.body);
  res.send(null);
});
app.post("/allUsers", ensureAuthenticated, async (req, res) => {
  if (req.body.status == "All statuses") {
    const response = await db.query("SELECT * FROM client_info");
    res.send(response.rows);
  } else {
    const response = await db.query(
      "SELECT * FROM client_info WHERE status=$1",
      [req.body.status],
    );
    res.send(response.rows);
  }
});

app.get("/cards_info", ensureAuthenticated, async (req, res) => {
  try {
    let sum = 0;
    const response = await db.query("Select * From client_info");
    let raw = response.rows;
    const completed = raw.filter((i) => i.status == "Completed");
    const active = raw.filter((i) => i.status == "In progress");
    const waiting = raw.filter((i) => i.status == "Waiting for parts");
    const money = raw.map((i) => i.estimated_price);
    money.forEach((i) => (sum += i));
    res.send({
      active: active.length,
      completed: completed.length,
      waiting: waiting.length,
      revenue: sum,
    });
  } catch (er) {
    console.log(er);
  }
});

async function client_logger(data) {
  try {
    await db.query(
      "INSERT INTO client_info(name,device,issue_description,status,estimated_price) VALUES ($1,$2,$3,$4,$5) ",
      [
        data.name,
        data.device,
        data.issue_description,
        data.status,
        data.estimated_price,
      ],
    );
  } catch (er) {
    console.log(er);
  }
}
async function client_updater(data) {
  try {
    await db.query(
      "UPDATE client_info SET name=$1, device=$2, issue_description=$3, status=$4, estimated_price=$5 WHERE cusomer_id=$6",
      [
        data.name,
        data.device,
        data.issue_description,
        data.status,
        data.estimated_price,
        data.customer_id,
      ],
    );
  } catch (er) {
    console.log(er);
  }
}

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});

async function verifier(user_obj) {
  let stored_pass;
  try {
    const response = await db.query(
      "SELECT * FROM user_access WHERE email=$1",
      [user_obj.email],
    );
    if (response.rows.length != 0) {
      stored_pass = response.rows[0].password;
    } else {
      console.log("user doesn't exist");
      return false;
    }
  } catch (er) {
    console.log(er);
    return false;
  }

  try {
    const res = await bcrypt.compare(user_obj.password, stored_pass);
    if (res == true) {
      console.log("approved");
      return true;
    } else {
      console.log("information missmatch");
      return false;
    }
  } catch (er) {
    console.log(er);
    return false;
  }
}
