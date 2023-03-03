CREATE TABLE beautifyers(
    beautif_id SERIAL PRIMARY KEY,
    bname  VARCHAR(100),
    email  VARCHAR(100) UNIQUE,
    quartier  VARCHAR(100),
    phone INT,
    details VARCHAR(300) ,
    recruit_date VARCHAR(20),
    createby   VARCHAR(100) 
);