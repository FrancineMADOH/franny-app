/* Replace with your SQL commands */

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(100) NOT NULL,
    username VARCHAR(10) NOT NULL,                               
    social_one VARCHAR(150) NOT NULL,                    
    social_two  VARCHAR(150),                 
    email VARCHAR(120) ,                 
    password  VARCHAR(100),               
    avatar VARCHAR(200),                     
    activ_date TIMESTAMP,              
    superuser BOOLEAN DEFAULT FALSE
);