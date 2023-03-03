CREATE TABLE prestations(
    pres_id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    price INT,
    duration VARCHAR(10),
    category VARCHAR(20)
);