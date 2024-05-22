CREATE TABLE rendezvous(
    rdv_id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_phone INT NOT NULL,
    client_email VARCHAR(100) NOT NULL,
    rdvdate VARCHAR(20) ,
    doneby INT DEFAULT NULL,
    prestation INT NOT NULL ,
    category VARCHAR(50) NOT NULL,
    rdvstate VARCHAR(20) DEFAULT 'Scheduled', --WHEN rdvstate !="Cancelled" & CAST(rdvdate) AS DATE < now() THEN "Completed" ELSE "" END,
    rdvcode VARCHAR(50),
    rdvtype VARCHAR(50) NOT NULL,
    rdv_price INT NOT NULL,
    ville VARCHAR(50) NOT NULL,
    quartier VARCHAR(100) NOT NULL,
    comments VARCHAR(255),
    cancellation_reason VARCHAR(255),
    is_review BOOLEAN NOT NULL DEFAULT FALSE,
    paiement_method VARCHAR(100),
    paiement_date VARCHAR(100),
    FOREIGN KEY (prestation) REFERENCES prestations(pres_id) ON DELETE CASCADE,
    FOREIGN KEY (doneby) REFERENCES beautifyers(beautif_id) ON DELETE CASCADE
);

ALTER TABLE rendezvous ADD COLUMN created_at TIMESTAMPTZ;
ALTER TABLE rendezvous ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE rendezvous ADD COLUMN updated_at TIMESTAMPTZ;
