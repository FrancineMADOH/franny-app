/* Replace with your SQL commands */
CREATE TABLE posts(
   post_id SERIAL PRIMARY KEY,
   title VARCHAR(255) NOT NULL,--a changer
   summary TEXT NOT NULL,
   content TEXT NOT NULL,
   author INT NOT NULL,
   create_at VARCHAR(50) ,
   illustration VARCHAR (200),
   slug VARCHAR(200),
   applause INT DEFAULT 0,
   category VARCHAR(50),
   imgcredit VARCHAR(255),
   FOREIGN KEY(author) REFERENCES admins(admin_id) ON DELETE CASCADE

);
