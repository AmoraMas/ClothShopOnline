// This file is designed to auto create an array to feed into the database sizes table
// This product comes in 43 colors and a 9 sizes for each color
// This file auto-creates those 387 Database entries for us

// Products is the product id for each product we are seeding data into.
// This is an array so that we can seed data for more than one product at a time should we need to.
const product_ID = [1];

// Holds all the potential sizes that can be for a particular product_ID and color option
const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

// These sizes frequently has no sale value assigned to them. This will help mimic that in the database
const noSaleSizes = ["3XL", "4XL", "5XL"];

// min and max price for each item
const minPrice = 13.8;
const maxPrice = 19.04;

// min and max sale price for each item
const minSalePrice = 12.95;
const maxSalePrice = 17.41;

// the max number of items can have for a single product_ID and color combo
const maxQuantity = 1111;

// Holds all the different color options available for a particular product_ID
// Arranged in push format to make it easier to add or comment out colors for the list
let colors = [];
colors.push("White");
colors.push("Black");
colors.push("Antique Cherry Red");
colors.push("Antique Sapphire");
colors.push("Ash");
colors.push("Azalea");
colors.push("Cardinal Red");
colors.push("Carolina Blue");
colors.push("Charcoal");
colors.push("Cherry Red");
colors.push("Dark Chocolate");

colors.push("Dark Heather");
colors.push("Forest");
colors.push("Garnet");
colors.push("Gold");
colors.push("Graphite Heather");
colors.push("Heather Sport Dark Green");
colors.push("Heather Sport Dark Maroon");
colors.push("Heather Sport Dark Navy");
colors.push("Heather Sport Royal");
colors.push("Heather Sport Scarlet Red");
colors.push("Heliconia");

colors.push("Indigo Blue");
colors.push("Irish Green");
colors.push("Light Blue");
colors.push("Light Pink");
colors.push("Maroon");
colors.push("Military Green");
colors.push("Mint Green");
colors.push("Navy");
colors.push("Old Gold");
colors.push("Orange");
colors.push("Orchid");

colors.push("Purple");
colors.push("Red");
colors.push("Royal");
colors.push("Safety Green");
colors.push("Safety Orange");
colors.push("Safety Pink");
colors.push("Sand");
colors.push("Sapphire");
colors.push("Sport Grey");
colors.push("Violet");

// Function to create a price between two price values
function createPrice(minPrice, maxPrice) {
  let price = Math.random() * (maxPrice - minPrice) + minPrice;
  price = Number.parseFloat(price).toFixed(2);
  if (price < minPrice) {
    price = minPrice;
  } else if (price > maxPrice) {
    price = maxPrice;
  }

  return price;
}

// Function to create a quantity while allowing a certain percentage equal 0;
function createQuantity() {
  let quantity = 0;
  const random = Math.random();
  // aproximately 5% of the created quantities will not run this and so will remain 0
  if (random > 0.05) {
    quantity = Math.random() * maxQuantity;
    quantity = Math.floor(quantity);
  }

  return quantity;
}
module.exports = {
  createDatabseSizeData: function () {
    let databaseSizeData = [];
    for (let indexP = 0; indexP < product_ID.length; indexP++) {
      for (let indexC = 0; indexC < colors.length; indexC++) {
        // Set up for certain sizes not having sales
        const noSale = Math.random() > 0.5 ? true : false;

        for (let indexS = 0; indexS < sizes.length; indexS++) {
          // Create price and salePrice and make sure price > salePrice
          let price = 100;
          let salePrice = 200;
          while (price < salePrice) {
            price = createPrice(minPrice, maxPrice);
            salePrice = createPrice(minSalePrice, maxSalePrice);
          }

          // nulls out the salePrice value of noSaleSizes items
          if (noSale && noSaleSizes.includes(sizes[indexS])) {
            salePrice = null;
          }

          // Create Quantity
          const quantity = createQuantity();

          let entry = `(${product_ID[indexP]}, '${colors[indexC]}', '${sizes[indexS]}', ${price}, ${salePrice}, ${quantity})`;

          //console.log(entry); // Test how each entry looks
          databaseSizeData.push(entry);
        }
      }
    }
    console.log(databaseSizeData);
    return databaseSizeData;
  },
};

// This is what the data needs to look like
//(1, "White", "XS", 13.8, 11.53, 899),
//(1, "White", "XS", 13.8, 11.53, 899)
