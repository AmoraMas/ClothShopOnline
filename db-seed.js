const { Pool } = require("pg");
const connDB = require("./connDB");
const pool = connDB.getPool();

const create = require("./db-seed-sizes");

// establish a connection we can close with a callback
async function runSeed(pool, callback) {
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

  // Seed table reviews
  console.log("Seeding table reviews");

  // Verify that the table is currently empty
  let insert = false;
  await new Promise((resolve, reject) =>
    pool.query(`SELECT COUNT(*) FROM reviews`, (err, data) => {
      console.log("number of existing rows: ", data.rows[0]["count"]);
      if (data.rows[0]["count"] == 0) {
        insert = true;
      }
      resolve();
    })
  );
  // only INSERT new rows if the table is currently empty
  if (insert) {
    await new Promise((resolve, reject) =>
      pool.query(
        `INSERT INTO reviews (userName, isVerified, date, rating, delivery, decoration, overallRating, fit, qualityRating, title, notes) VALUES 
          ('Naresh A.', true, '04/04/23', 5.0, 'On Time', 'Keep it blank', 5.0, 'True to size', 5.0, 'Great fit, good fabric', 'Great fit, good fabric and excellent color'),
          ('Jim W.', true, '03/27/23', 5.0, 'On Time', null, 5.0, 'True to size', 4.0, 'Comfortable and good looking.', 'Comfortable and good looking.'),
          ('Dorothy B.', true, '03/27/23', 5.0, 'Early', 'Heat Transfer', null, null, null, 'great buy', 'hoodies were better than expected. will buy again'),
          ('Elizabeth P.', true, '03/27/23', 5.0, 'On Time', 'Screen Printing, Heat Transfer, Tie Dye', 5.0, 'Runs smalls', 4.0, 'Good and affordable', 'Is always good to know that this hoodie is a little on the short side but if that''s what you''re looking for then it''s great. Good quality and easy to use for iron on vinyl.'),
          ('Ian M.', true, '03/26/23', 5.0, 'Early', 'Screen Printing', 5.0, 'True to size', 4.0, 'Very nice fit and good', 'Very nice fit and good quality!'),
          ('Cruz D.', true, '03/26/23', 5.0, 'On time', 'Keep it blank', 5.0, 'True to size', 5.0, 'Amazingly great quality for price.', 'Amazingly great quality for price.')
        `,
        (err, data) => {
          if (err) {
            console.log("INSERT INTO reviews failed");
            console.log(err);
            reject();
          } else {
            console.log("INSERT INTO reviews successful");
            resolve();
          }
        }
      )
    );
  } else {
    console.log("Nothing seeded because table reviews was not empty");
  }

  // Seed table reviews
  console.log("Seeding table questions");
  // Verify that the table is currently empty
  insert = false;
  await new Promise((resolve, reject) =>
    pool.query(`SELECT COUNT(*) FROM questions`, (err, data) => {
      console.log("number of existing rows: ", data.rows[0]["count"]);
      if (data.rows[0]["count"] == 0) {
        insert = true;
      }
      resolve();
    })
  );
  // only INSERT new rows if the table is currently empty

  if (insert) {
    await new Promise((resolve, reject) =>
      pool.query(
        `INSERT INTO questions (userNameQ, isVerified, dateQuestion, question, numAnswers, userNameA, dateAnswer, answer) VALUES 
          ('Rebecca', true, '12/31/21', 'Are the hip widths available for the size chart?', 1, 'Cloth Shop Online', '12/31/21', 'We apologize, we are not provided with the hip measurements by the manufacturer.'),
          ('Hannah', true, '03/22/21', 'When will there be more Sand colored hoodies in L and XL?', 1, 'Cloth Shop Online', '04/09/21', ' For the Gildan - Heavy Blend™ Hooded Sweatshirt - 18500 in and the XL is back in stock and we will have more of the Large by mid May.'),
          ('Nicole', true, '03/18/21', 'Will the heather sport dark green in 2xl be available again?', 1, 'Cloth Shop Online', '04/09/21', ' We apologize for the delayed response as the 2XL Heavy Blend™ Hooded Sweatshirt - Gildan 18500 in Heather Sport Dark Green is back in stock.'),
          ('kristina', true, '03/01/21', 'When will Old Gold sizes be restocked?', 1, 'Cloth Shop Online', '03/01/21', 'We should receive more of the Gildan - Heavy Blend™ Hooded Sweatshirt - 18500 Old Gold by late march.'),
          ('Hannah', true, '02/23/21', 'When will Orchid be available in sizes Medium and Large?', 1, 'Cloth Shop Online', '02/24/21', 'The Gildan - Heavy Blend™ Hooded Sweatshirt - 18500 in orchid is unfortunately being discontinued and we will not be receiving more.'),
          ('Day', true, '02/17/21', 'When will black and sand restock in missing sizes?', 1, 'Cloth Shop Online', '02/18/21', 'For the Gildan - Heavy Blend™ Hooded Sweatshirt - 18500 in Sand we will receive more shipment in March and May. We will receive more of the black throughout March.')
        `,
        (err, data) => {
          if (err) {
            console.log("INSERT INTO questions failed");
            console.log(err);
            reject();
          } else {
            console.log("INSERT INTO questions successful");
            resolve();
          }
        }
      )
    );
  } else {
    console.log("Nothing seeded because table questions was not empty");
  }

  //
  // Verify that the table is currently empty
  insert = false;
  await new Promise((resolve, reject) =>
    pool.query(`SELECT COUNT(*) FROM products`, (err, data) => {
      console.log("number of existing rows: ", data.rows[0]["count"]);
      if (data.rows[0]["count"] == 0) {
        insert = true;
      }
      resolve();
    })
  );
  // only INSERT new rows if the table is currently empty

  if (insert) {
    await new Promise((resolve, reject) =>
      pool.query(
        `INSERT INTO products (imageLink, productLink, style, productName, rating, numRatings, price) VALUES
          ('images/products/32_fs.jpg', null, 'Softstyle® T-Shirt', 'Gildan 64000', 5.0, 626, 2.88),
          ('images/products/395_fs.jpg', null, 'Heavy Blend™ Hooded Sweatshirt', 'Gildan 18500', 5.0, 609, 11.53),
          ('images/products/16_fs.jpg', null, 'Heavy Cotton™ T-Shirt', 'Gildan 5000', 5.0, 503, 2.71),
          ('images/products/7584_fs.jpg', null, 'CVC Jersey Tee', 'BELLA + CANAS 3001CVC', 5.0, 210, 5.48),
          ('images/products/29_fs.jpg', null, 'Jersey Tee', 'BELLA + CANVAS 3001', 5.0, 272, 4.72),
          ('images/products/146_fs.jpg', null, 'DryBlend® T-Shirt', 'Gildan 8000', 5.0, 197, 2.79),
          ('images/products/391_fs.jpg', null, 'Ecosmart® Hooded Sweatshirt', 'Hanes P170', 5.0, 75, 8.26),
          ('images/products/393_fs.jpg', null, 'NuBlend® Hooded Sweatshirt', 'JERZEES 996MR', 5.0, 163, 8.40),
          ('images/products/1828_fs.jpg', null, 'Midweight Hooded Sweatshirt', 'Independent Trading CO. SS4500', 5.0, 125, 13.36),
          ('images/products/7500_fs.jpg', null, 'Hammer™ Fleece Hooded Sweatshirt', 'Gildan HF500', 5.0, 1, 14.07),
          ('images/products/9126_fs.jpg', null, 'Icon Lightweight Loopback Terry Hooded Sweatshirt', 'Independent Trading CO. SS1000', 5.0, 16, 15.86),
          ('images/products/9352_fs.jpg', null, 'Softstyle® Hooded Sweatshirt', 'Gildan SF500', null, null, 13.91),
          ('images/products/372_fs.jpg', null, 'Heavy Blend™ Crewneck Sweatshirt', 'Gildan 18000', 5.0, 600, 6.52),
          ('images/products/415_fs.jpg', null, 'Heavy Blend™ Full-Zip Hooded Sweatshirt', 'Gildan 18600', 5.0, 218, 17.26),
          ('images/products/428_fs.jpg', null, 'Heavy Blend™ Sweatpants', 'Gildan 18200', 5.0, 54, 11.14),
          ('images/products/557_fs.jpg', null, 'Heavy Blend™ Youth Hooded Sweatshirt', 'Gildan 18500B', 5.0, 41, 12.82),
          ('images/products/571_fs.jpg', null, 'Heavy Blend™ Youth Sweatshirt', 'Gildan 18000B', 5.0, 10, 7.26),
          ('images/products/576_fs.jpg', null, 'Heavy Blend™ Youth Sweatpants', 'Gildan 18200B', 5.0, 2, 12.76)
        `,
        (err, data) => {
          if (err) {
            console.log("INSERT INTO products failed");
            console.log(err);
            reject();
          } else {
            console.log("INSERT INTO products successful");
            resolve();
          }
        }
      )
    );
  } else {
    console.log(
      "Did not seed new data because the table products was not empty"
    );
  }

  //
  // Seed table reviews
  console.log("Seeding table sizes");
  // Verify that the table is currently empty
  insert = false;
  await new Promise((resolve, reject) =>
    pool.query(`SELECT COUNT(*) FROM sizes`, (err, data) => {
      console.log("number of existing rows: ", data.rows[0]["count"]);
      if (data.rows[0]["count"] == 0) {
        insert = true;
      }
      resolve();
    })
  );

  // only INSERT new rows if the table is currently empty
  if (insert) {
    const data = create.createDatabseSizeData();
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      await new Promise((resolve, reject) =>
        pool.query(
          `INSERT INTO sizes (product_ID, color, size, price, salePrice, numAvailable) VALUES ${data[i]} RETURNING *`,
          (err, data) => {
            if (err) {
              console.log("INSERT INTO sizes failed");
              console.log(err);
              reject();
            } else {
              console.log("INSERT INTO sizes successful");
              console.log("Inserted: ", data.rows[0]);
              count++;
              resolve();
            }
          }
        )
      );
    }
    console.log(count + " inserts into sizes are now complete.");
  } else {
    console.log("Nothing seeded because table sizes was not empty");
  }

  callback();
}

runSeed(pool, () => {
  pool.end();
  console.log("Completed Seeding");
});
