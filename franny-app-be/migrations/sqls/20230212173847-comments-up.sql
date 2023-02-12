/* Replace with your SQL commands */


CREATE TABLE comments(
   comment_id SERIAL PRIMARY KEY,
   email VARCHAR(100) NOT NULL,
   comment TEXT NOT NULL,
   comment_date DATE,
   post_id INT 
);
