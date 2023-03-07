CREATE TABLE reviews(
    review_id SERIAL PRIMARY KEY,
    rdvid INT,  
    user_id VARCHAR(100),           
    done_by INT,                  
    review_date VARCHAR(200),               
    note INT,                      
    comment VARCHAR(300)                   
);
