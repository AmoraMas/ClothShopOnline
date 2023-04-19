// define dependencies
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000; // Port that Express listens to for requests

app.use(cors());

app.use(express.json());

// define structure for accessing database
//const { Pool } = require('pg');
const connDB = require("./connDB");
const pool = connDB.getPool();

// listen to the port
app.listen(port, function () {
  console.log(`Server is listening on port ${port}.`);
});

//
// here is where all of your requests with routes go
//

// test request to verify this file is working
app.get("/api/test", (req, res, next) => {
  res.send("Programming is awesome! This page works!");
});

// ROUTES FOR EVERYTHING IN TABLE
// return all entries for table reviews
app.get("/api/reviews", (req, res, next) => {
  const result = pool.query("SELECT * FROM reviews;", (err, data) => {
    if (err) {
      return next({ status: 500, message: err });
    }
    res.send(data.rows);
  });
});

// return all entries for table questions
app.get("/api/questions", (req, res, next) => {
  const result = pool.query("SELECT * FROM questions;", (err, data) => {
    if (err) {
      return next({ status: 500, message: err });
    }
    res.send(data.rows);
  });
});

// return all entries for table products
app.get("/api/products", (req, res, next) => {
  const result = pool.query("SELECT * FROM products;", (err, data) => {
    if (err) {
      return next({ status: 500, message: err });
    }
    res.send(data.rows);
  });
});

// return all entries for table sizes
app.get("/api/sizes", (req, res, next) => {
  const result = pool.query("SELECT * FROM sizes;", (err, data) => {
    if (err) {
      return next({ status: 500, message: err });
    }
    res.send(data.rows);
  });
});

// return entries for table sizes for product_ID
app.get("/api/sizes/product/:id/", (req, res, next) => {
  const productID = parseInt(req.params.id);
  const color = req.params.color;
  const result = pool.query(
    "SELECT * FROM sizes where product_ID = $1;",
    [productID],
    (err, data) => {
      if (err) {
        return next({ status: 500, message: err });
      }
      res.send(data.rows);
    }
  );
});

// return entries for table sizes for product_ID and color
app.get("/api/sizes/product/:id/color/:color", (req, res, next) => {
  const productID = parseInt(req.params.id);
  const color = req.params.color;
  const result = pool.query(
    "SELECT * FROM sizes where product_ID = $1 AND color = $2;",
    [productID, color],
    (err, data) => {
      if (err) {
        return next({ status: 500, message: err });
      }
      res.send(data.rows);
    }
  );
});

// return entries for table sizes for product_ID and color and size
app.get("/api/sizes/product/:id/color/:color/size/:size", (req, res, next) => {
  const productID = parseInt(req.params.id);
  const color = req.params.color;
  const size = req.params.size;
  const result = pool.query(
    "SELECT * FROM sizes where product_ID = $1 AND color = $2 AND size = $3;",
    [productID, color, size],
    (err, data) => {
      if (err) {
        return next({ status: 500, message: err });
      }
      res.send(data.rows[0]);
    }
  );
});

//
// TODO:
// GET routes
// PATCH routes
// DELETE routes
//

//
// Below are standard routes -- leave alone
//

// if an error occured  -- Keep next to last
app.use((err, req, res, next) => {
  //console.error("Error Stack: ", err.stack);
  res.status(err.status).send({ error: err });
});

// if requested handle does not exist -- keep last
app.use((req, res, next) => {
  // res.status(404).send('Path Not Found: ${req.url}');   // Only sends message or JSON, not both
  res.status(404).json({ error: { message: `Path Not Found: ${req.url}` } });
});
