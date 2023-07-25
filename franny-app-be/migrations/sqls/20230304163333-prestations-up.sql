CREATE TABLE prestations(
    pres_id SERIAL PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    price INT NOT NULL ,
    duration VARCHAR(10),
    category VARCHAR(20),
    seance TEXT,
    gold VARCHAR(255),
    gold_price INT NOT NULL,
    premium VARCHAR(255) NOT NULL,
    premium_price INT NOT NULL
);
