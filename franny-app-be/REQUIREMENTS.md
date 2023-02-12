# API REQUIREMENTS

The purpose of this API is to have users being ale to create,update an delete blogpost. They should also be able to interact with the blogposts by adding updating and deleting comments. Testing must be implemented for all models and routes.

## API ENDPOINTS

### USERS

- Index: List all the users `/api/users/`[GET]
- Delete: Delete a particular user `/api/users/delete`[DELETE]
- Create new userss : `/api/users/` [POST]

### POSTS

- Index: List all blog posts `/api/posts`[GET]
- show: Show a particular blog post `/api/posts/:id`[GET]
- Delete: Delete a particular blogpost `/api/posts/:id`[DELETE]
- Update: update a post `/api/posts/:id`[PUT]
- topten: List the ten most commented articles `api/posts/:top`[GET]
- topapplause: List the ten most commented articles `api/posts/:applause`[GET]
- recents: List the five most recents articles `api/posts/recent`[GET]
- search : List articles containing a search term `api/posts/:search`[GET]
- category: Display articles depending on category `api/posts/:category`[GET]

### COMMENTS

- index: Display all he comments relaed to an article `/api/comments`[GET]
- update: Update a comment `/api/comment/:id`[PUT]
- delete: Delete a comment `/api/comments/:id`[DELETE]
- topten: Display the top 10 recent comment of an article `/api/comments/topten`[GET]

### ADMINS

- index: List all the admin `api/admins/`[GET]
- update: Update an admin data `api/admin/:adminname`[PUT]
- show: Show the login detail of a particular user`api/admin/:adminname`[GET]
- delete: Delete an admin `api/admin/delete`[DELETE]

## DATA SHAPES

### USERS

---

|COLUMNS    | TYPE                  |
|***********|***********************|
|username   | VARCHAR               |
|email      | VARCHAR               |
|hasaccount | BOOLEAN               |
*************************************

### POSTS

---

| Columns                                                | Type            |
|******************************************************* |*****************|
| title                                                  | VARCHAR         |
| summary                                                | TEXT            |
| content                                                | TEXT            |
| author                                                 | INT FOREIGN KEY |
| createdAt                                              | DATE            |
| illustration                                           | BUFFER          |
| slug                                                   | VARCHAR         |
| applause                                               | INT             |
| category                                               | VARCHAR         |
|**************************************************************************|

### Comments

---

| Column                                                   | Type            |
|********************************************************* |*****************|
| auteur                                                   | VARCHAR         |
| email                                                    | VARCHAR         |
| comment                                                  | TEXT            |
| commentdate                                              | DATE            |
| post                                                     | INT FOREIGN KEY |
| ******************************************************** |******************

### ADMINS

---

| Column                       | Type                             |
| ---------------------------- | -------------------------------- |
| adminname                    | VARCHAR                          |
| socialone                    | VARCHAR                          |
| socialtwo                    | VARCHAR                          |
| email                        | VARCHAR                          |
| password                     | VARCHAR                          |
| avatar                       | BUFFER                           |
| activdate                    | DATE                             |
| superuser                    | BOOLEAN                          |
| username                     | BOOLEAN                          |
| **************************** | ******************************** |