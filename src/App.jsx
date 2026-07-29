import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import { Routes, useLocation, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const hidelayouts_routes = ["/SignIn", "/Dashboard"];
  const hidelayout = hidelayouts_routes.includes(location.pathname);

  return (
    <>
      {!hidelayout && <Navbar />}
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hidelayout && <Hero />}
      {!hidelayout && <Services />}
      {!hidelayout && <About />}
      {!hidelayout && <Testimonials />}
      {!hidelayout && <Contact />}
      {!hidelayout && <Footer />}
    </>
  );
};

export default App;
