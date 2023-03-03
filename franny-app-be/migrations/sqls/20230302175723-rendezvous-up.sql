CREATE TABLE rendezvous(
    rdv_id SERIAL PRIMARY KEY,
    rdvdate VARCHAR(20) ,
    doneby INT,
    prestation INT ,
    rdvstate   VARCHAR(30) ,
    rdvcode  VARCHAR(50) ,
    rdvtype VARCHAR(20) ,
    userid  VARCHAR(100), 
    ville  VARCHAR(50),
    quartier  VARCHAR(100)
);