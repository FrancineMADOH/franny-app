CREATE TABLE rendezvous(
    rdv_id SERIAL PRIMARY KEY,
    rdvdate VARCHAR(20) ,
    doneby INT,
    prestation INT ,
    rdvstate INT,
    rdvcode VARCHAR(50) ,
    rdvtype INT ,
    userid VARCHAR(100), 
    ville VARCHAR(50),
    quartier VARCHAR(100)
);