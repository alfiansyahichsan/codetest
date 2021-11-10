# Node Js Express Js MySql (Sequelize) | Tech Stack

## Requirements for install (I'm using NVM)

#### 1. NODE v14.16.0 AND NPM 6.14.11

#### 2. MySql 5.7.28

<br/>

## How to install

#### 1. Git clone this repo

#### 2. Open the project and then

```
npm install
```

#### 3. Copy .env.example or rename into .env

#### 4. Create database with name codetest (if you want to use another database, define it in .env file with variable name is DB_DATABASE)

#### 5. Run Sequelize migrations to create search_logs table

```
npx sequelize-cli db:migrate
```

#### 6. Run the app (http://localhost:3001)

```
npm run dev
```

<br/>

## TEST RESULT

<br />

## 1. Simple Database Querying

#### Simply run this query on MySql Editor

```
-- create
CREATE TABLE USERS (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  parent INTEGER
);

-- insert
INSERT INTO USERS VALUES (1, 'Ali', 2);
INSERT INTO USERS VALUES (2, 'Budi', 0);
INSERT INTO USERS VALUES (3, 'Cecep', 1);

-- fetch
SELECT u.id AS ID, u.username AS USERNAME, un.username AS PARENTUSERNAME FROM USERS AS u LEFT JOIN USERS AS un ON u.parent = un.id;
```

<b>RESULT</b>
| ID | USERNAME | PARENTUSERNAME |
| :-: | :------: | :------------: |
| 1 | Ali | Budi |
| 2 | Budi | |
| 3 | Cecep | Ali |

<br />

## 2. Please write a small ExpressJS server to search movies from http://www.omdbapi.com/

The Backend should :

- Have 2 endpoint named "/search" with GET method and "/detail" with GET method (single movie detail)
- Each API calls should be logged into a MySQL table, specifying DateTime, API endpoint getting called and the parameters passed
- Contain access credential to call the API as such :

  ⋅Key : "21ecdcac"

  ⋅URL : http://www.omdbapi.com/

  ⋅\*Example url call to search is --> GET http://www.omdbapi.com/?apikey=21ecdcac&t=Batman

- Be written in ExpressJS framework

Important aspects :

- Readability of code
- Good display on the knowledge of "Separation of Concerns for Codes"
- Write unit tests on some of the important files. Bigger plus points for complete unit test cases
- Good use of asynchronous

Plus points:

- Deploy your result to a public URL so we can check the result - Implementation of Clean Architecture is a BIG plus
- Complete Unit tests
