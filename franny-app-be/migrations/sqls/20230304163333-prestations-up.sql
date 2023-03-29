CREATE TABLE prestations(
    pres_id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    price INT,
    duration VARCHAR(10),
    category VARCHAR(20),
    seance TEXT,
    gold VARCHAR(100),
    premium VARCHAR(100)
);