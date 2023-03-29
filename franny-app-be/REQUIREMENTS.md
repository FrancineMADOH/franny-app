# API REQUIREMENTS

The purpose of this API is to have users being ale to create,update an delete blogpost. They should also be able to interact with the blogposts by adding updating and deleting comments. Testing must be implemented for all models and routes.

## API ENDPOINTS

### USERS

- Index: List all the users `/api/users/`[GET]
- Delete: Delete a particular user `/api/users/delete`[DELETE]
- Create new userss : `/api/users/` [POST]
- check if a user exist `/api/users/:email` [GET]

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

- create: Add a new comment to an article `/api/comments`[POST]
- index: Display all he comments relaed to an article `/api/comments`[GET]
- count: Count a comment `/api/comments/count`[GET]
- delete: Delete a comment `/api/comments/:id`[DELETE]
- count: Count the total number of comment of an article ``[GET]

### ADMINS

- create: Create a new admin  `api/admins/` [POST]
- index: List all the admin `api/admins/`[GET]
- update: Update an admin data `api/admin/:adminname`[PUT]
- show: Show the login detail of a particular user`api/admin/:adminname`[GET]
- delete: Delete an admin `api/admin/delete`[DELETE]

### BEAUTYFYERS

- create: Create a new beautifyer new beautifyer `api/admins/beautifyers`[POST]
- update: Update  a beautifyer `/api/admins/beautyfyer/:id` [PUT]
- delete: Remove  a beautifyer   `/api/admins/beautyfyer/:id` [DELETE]
- index: Get the list of beautifyer `` [GET]

### RENDEZVOUS

- create: Create a new rendezvous `api/beauty/`    [POST]
- update: Update a rendezvous `/api/admins/beauty/:id` [PUT]
- delete: Delete a rendez vous `api/admins/beauty` [DELETE]
- count: Count the number of rendezvous `api/admins/beauty/count`  [GET]
- active: select activ rendezvous   `api/admins/beauty/active`  [GET]
- cancelled: Cancel the select rendezvous `api/admins/beauty/cancelled` [GET]
- countActive: count active rendezvous    `api/admins/beauty/countactive`    [GET]
- countCancelled: count cancelled rendezvous    `api/admins/beauty/countcancelled`  [GET]
- category: get rendezvous by category `api/admins/beauty/category`   [GET]

### REVIEW

- create: Create an review `api/beauty/review` [POST]
- index: Get the list of reviews `api/beauty/review` [GET]
- show: Show the specified review `api/admin/reviews/:id`    [GET]
- category: get the review by category  `api/admins/reviews/category`  [GET]

### FAQ

- create: Create a new faq `api/admins/faq`   [POST]
- index: List all the faq  `api/admin`    [GET]
- delete: Delete the specified faq ``   [DELETE]

### PRESTATIONS

- create: Create a new prestation
- index: List all prestations
- update: Update a specified prestation

### SEANCES

- create: Create a new seance `POST` [POST]
- show: Show a seance by id `` [GET]
- update: Update a seance   ``  [PUT]
- delete: Delete detail about a seance  `` [DELETE]



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

| Columns              |Type                           |
|*******************************************************
| title                | VARCHAR                       |
| summary              | TEXT                          |
| content              | TEXT                          |
| author               | INT FOREIGN KEY               |
| createdAt            | DATE                          |
| illustration         | BUFFER                        |
| slug                 | VARCHAR                       |
| applause             | INT                           |
| category             | VARCHAR                       |
|******************************************************|

### Comments

---

| Column                 | Type                          |
|********************************************************|
| auteur                 |          VARCHAR              |
| email                  | VARCHAR                       |
| comment                | TEXT                          |
| commentdate            | DATE                          |
| post                   | INT FOREIGN KEY               |
| ******************************************************** 

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


### PRESTATIONS

|COLUMNS       | TYPE                  |
|**************|***********************|
|title         | VARCHAR               |
|prix          | VARCHAR               |
|duree         | VARCHAR               |
|category      | VARCHAR               |
****************************************

### SEANCES

|COLUMNS       | TYPE                  |
|**************|***********************|
|prestation_id | VARCHAR               |
|description   | VARCHAR               |
|tache         | VARCHAR               |
|warning       | VARCHAR               |
|silver        | VARCHAR               |
|gold          | VARCHAR               |         
****************************************

### FAQ

|COLUMNS       | TYPE                  |
|**************|***********************|
|question      | VARCHAR               |
|reponse       | VARCHAR               |
****************************************

### REVIEWS


|COLUMNS       | TYPE                  |
|**************|***********************|
|rdvid         | INT               |
|realisatrice  | INT                   |
|date          | VARCHAR               |
|note          | INT                   |     
|commentaire   | VARCHAR               |   
|user          | VARCHAR               |
****************************************


### BEAUTYFYERS

|COLUMNS       | TYPE                  |
|**************|***********************|
|bname         |  VARCHAR              |
|email         |  VARCHAR              |
|quartier      |  VARCHAR              |
|phone         |  INT                  |
|description   |  VARCHAR              |
|recruitdate   |  VARCHAR              |
|createby      |  VARCHAR              |
****************************************

### RENDEZVOUS


|COLUMNS       | TYPE                  |
|**************|***********************|
|rdvdate       | VARCHAR               |
|doneby        | INT                   |
|prestation    | INT                   |
|state         | VARCHAR               |
|rdvcode       | VARCHAR               |
|rdvtype       | VARCHAR               |
|user          | VARCHAR               |
|ville         | VARCHAR               |
|quartier      | VARCHAR               |
****************************************
