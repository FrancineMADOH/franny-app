/* Replace with your SQL commands */

CREATE TABLE admins(
    admin_id SERIAL PRIMARY KEY,
    admin_name VARCHAR(100) NOT NULL,
    username VARCHAR(10) NOT NULL,                               
    twitter_url VARCHAR(150) NOT NULL,                    
    linkedin_url  VARCHAR(150),
    facebook_url VARCHAR(150),                 
    email VARCHAR(120) ,                 
    admin_password  VARCHAR(100),               
    avatar BYTEA,                     
    activ_date VARCHAR(50),              
    superuser BOOLEAN DEFAULT FALSE
);