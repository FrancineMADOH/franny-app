CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    email VARCHAR(150),
    postid INT,
    FOREIGN KEY(postid) REFERENCES posts(post_id) ON DELETE CASCADE                 
)