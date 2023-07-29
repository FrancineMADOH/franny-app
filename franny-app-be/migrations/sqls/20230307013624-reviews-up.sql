CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    rdvid INT,  
    review_date VARCHAR(200),               
    note INT,                      
    comment VARCHAR(300),
    FOREIGN KEY(rdvid) REFERENCES rendezvous(rdv_id) ON DELETE CASCADE                 
);
