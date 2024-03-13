CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    email VARCHAR(150),
    postid INT,
    FOREIGN KEY(postid) REFERENCES posts(post_id) ON DELETE CASCADE                 
)

ALTER TABLE likes ADD COLUMN timestamp TIMESTAMPTZ;
ALTER TABLE likes ALTER COLUMN timestamp SET DEFAULT now();

