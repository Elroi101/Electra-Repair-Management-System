CREATE TABLE user_access(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(70),
    password TEXT,
    role VARCHAR(30)
);
CREATE TABLE client_info(
    cusomer_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    device VARCHAR(70),
    issue_description TEXT,
    status VARCHAR(30),
    estimated_price FLOAT,
)