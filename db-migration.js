const { Pool } = require("pg");
const connDB = require("./connDB");
const pool = connDB.getPool();

// establish a connection we can close with a callback
async function runMigration(pool, callback) {
  // connect to DB
  console.log("Connecting to the database");
  await new Promise((resolve, reject) =>
    pool.connect((err, client, done) => {
      if (err) {
        console.log("Failed to connect to the database");
        console.error(err);
        reject();
      }
      console.log("Connected to the database");
      resolve();
    })
  );

  // Create table reviews
  console.log("Creating table reviews");
  await new Promise((resolve, reject) =>
    pool.query(
      `CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY NOT NULL,
            userName VARCHAR(50),
            isVerified BOOLEAN DEFAULT false,
            date VARCHAR(10),
            rating DECIMAL(2,1) DEFAULT 0,
            delivery VARCHAR(25),
            decoration VARCHAR(100),
            overallRating DECIMAL(2,1),
            fit VARCHAR(25),
            qualityRating DECIMAL(2,1),
            title VARCHAR(50),
            notes TEXT,
            numThumbsUp INTEGER DEFAULT 0,
            numThumbsDown INTEGER DEFAULT 0
        )`,
      (err, data) => {
        if (err) {
          console.log("CREATE TABLE reviews failed");
          console.log(err);
          reject();
        } else {
          console.log("CREATE TABLE reviews sucessful");
          resolve();
        }
      }
    )
  );

  // Create table questions
  await new Promise((resolve, reject) =>
    pool.query(
      `CREATE TABLE IF NOT EXISTS questions (
            id SERIAL PRIMARY KEY NOT NULL,
            userNameQ VARCHAR(500),
            isVerified BOOLEAN DEFAULT false,
            dateQuestion VARCHAR(10),
            question TEXT,
            numAnswers INTEGER,
            userNameA VARCHAR(50),
            dateAnswer VARCHAR(10),
            answer TEXT,
            numThumbsUp INTEGER DEFAULT 0,
            numThumbsDown INTEGER DEFAULT 0
        )`,
      (err, data) => {
        if (err) {
          console.log("CREATE TABLE questions failed");
          console.log(err);
          reject();
        } else {
          console.log("CREATE TABLE questions sucessful");
          resolve();
        }
      }
    )
  );

  // Create table products
  await new Promise((resolve, reject) =>
    pool.query(
      `CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY NOT NULL,
            imageLink VARCHAR(250),
            productLink VARCHAR(250),
            style VARCHAR(60),
            productName VARCHAR(60),
            rating DECIMAL(2,1),
            numRatings INTEGER,
            price MONEY
        )`,
      (err, data) => {
        if (err) {
          console.log("CREATE TABLE products failed");
          console.log(err);
          reject();
        } else {
          console.log("CREATE TABLE products sucessful");
          resolve();
        }
      }
    )
  );

  // Create table sizes
  await new Promise((resolve, reject) =>
    pool.query(
      `CREATE TABLE IF NOT EXISTS sizes (
            id SERIAL PRIMARY KEY NOT NULL,
            product_ID INTEGER,
            color VARCHAR(25),
            size VARCHAR(5),
            price MONEY,
            salePrice MONEY DEFAULT null,
            numAvailable INTEGER
        )`,
      (err, data) => {
        if (err) {
          console.log("CREATE TABLE sizes failed");
          console.log(err);
          reject();
        } else {
          console.log("CREATE TABLE sizes sucessful");
          resolve();
        }
      }
    )
  );

  callback();
}

runMigration(pool, () => {
  pool.end();
  console.log("Migration Completed");
  console.log("Press [CTRL] + c to stop running.");
});
