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
   updated_by INT NOT NULL,
   FOREIGN KEY(author) REFERENCES admins(admin_id) ON DELETE CASCADE,
   FOREIGN KEY(updated_by) REFERENCES admins(admin_id) ON DELETE CASCADE
);

ALTER TABLE posts ADD COLUMN updated_at TIMESTAMPTZ;
ALTER TABLE posts ALTER COLUMN updated_at SET DEFAULT now();
