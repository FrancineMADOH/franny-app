/* Replace with your SQL commands */


CREATE TABLE comments(
   comment_id SERIAL PRIMARY KEY,
   email VARCHAR(100) NOT NULL,
   comment_body TEXT NOT NULL,
   comment_date VARCHAR(100),
   user_name VARCHAR(100),
   blog_post_id INT,
   FOREIGN KEY(blog_post_id) REFERENCES posts(post_id) ON DELETE CASCADE   
);
