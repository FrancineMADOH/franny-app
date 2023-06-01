/* Replace with your SQL commands */


CREATE TABLE comments(
   comment_id SERIAL PRIMARY KEY,
   email VARCHAR(100) NOT NULL,
   comment_body TEXT NOT NULL,
   comment_date VARCHAR(100),
   post_id INT 
   FOREIGN KEY(post_id) REFERENCES posts(post_id) ON DELETE CASCADE
);
