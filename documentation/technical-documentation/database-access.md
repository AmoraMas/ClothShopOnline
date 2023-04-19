# How to access Database information through the front end

# ADDITIONAL
- Database is now on Render.com
- Give it some time to answer the first GET request and then is tends to speed up.
- The following routes have been tested and work with Postman.
  - https://phill-in-the-blank.onrender.com/api/test
  - https://phill-in-the-blank.onrender.com/api/products
  - https://phill-in-the-blank.onrender.com/api/reviews
  - https://phill-in-the-blank.onrender.com/api/questions
- If you need to access the database directly, here is the command you need to run in your PostgreSQL environment at the "#" prompt
  - PGPASSWORD=8rMrle08aXC8EMJwJgLPCzTn70petZ7l psql -h dpg-cgqu7ondvk4n874biq9g-a.oregon-postgres.render.com -U shopping_p784_user shopping_p784

## Example function
```javascript
  // const host = "http://localhost:8000";
// OR
  // const host = "https://phill-in-the-blank.onrender.com";
  const getSizeData = async () => {
    try {
      let response = await fetch(
        host + "/api/sizes/product/1/color/" + currentColor
      );
      let data = await response.json();
      setSizes(data);
    } catch (err) {
      console.error(err.message);
    }
  };
```
## Routes
### Test
- /api/test
  - Use to verify access to the routes file
  - returns
    - type string
    - `"Programming is awesome! This page works!"`
### Reviews
- /api/reviews
  - Use to view all written reviews
  - Consists of one review more than shows on the page
  - returns
    - type array of objects
    - `[
      {
        "id": 1,
        "username": "Naresh A.",
        "isverified": true,
        "date": "04/04/23",
        "rating": "5.0",
        "delivery": "On Time",
        "decoration": "Keep it blank",
        "overallrating": "5.0",
        "fit": "True to size",
        "qualityrating": "5.0",
        "title": "Great fit, good fabric",
        "notes": "Great fit, good fabric and excellent color",
        "numthumbsup": 0,
        "numthumbsdown": 0
    }, etc ]`

### Questions
- /api/questions
  - Use to view all written questions
  - Consists of one question more than shows on the page
  - returns
    - type array of objects
    - `[
    {
        "id": 1,
        "usernameq": "Rebecca",
        "isverified": true,
        "datequestion": "12/31/21",
        "question": "Are the hip widths available for the size chart?",
        "numanswers": 1,
        "usernamea": "Cloth Shop Online",
        "dateanswer": "12/31/21",
        "answer": "We apologize, we are not provided with the hip measurements by the manufacturer.",
        "numthumbsup": 0,
        "numthumbsdown": 0
    }, etc ]`

### Products
- /api/products
  - Use to view all written products
  - Consists of all information shown on the main page
  - Best Sellers -- Start carousel at array index 0
  - Similar Products -- Start carousel at array index 6
  - Related Products -- Start carousel at array index 12
  - returns
    - type array of objects
    - `[
    {
        "id": 1,
        "imagelink": "images/products/32_fs.jpg",
        "productlink": null,
        "style": "Softstyle® T-Shirt",
        "productname": "Gildan 64000",
        "rating": "5.0",
        "numratings": 626,
        "price": "$2.88"
    }, etc ]`

### Sizes
- /api/sizes
  - Use to view all sizes in the database //NOT INTENDED FOR USE//
  - With just one product, consists of 387 entries
  - returns
    - type array of objects
    - `[
    {
        "id": 1,
        "product_id": 1,
        "color": "White",
        "size": "XS",
        "price": "$18.96",
        "saleprice": "$14.83",
        "numavailable": 607
    }, etc ]`

- /api/sizes/product/:id/
  - Use to view all sizes for a product ID //NOT INTENDED FOR USE//
  - Example /api/sizes/product/1/
  - returns
    - type array of objects
    - `[
    {
        "id": 1,
        "product_id": 1,
        "color": "White",
        "size": "XS",
        "price": "$18.96",
        "saleprice": "$14.83",
        "numavailable": 607
    }, etc ]`

- /api/sizes/product/:id/color/:color
  - Use to view all sizes for a product ID and color //EXPECTED USE//
  - Example /api/sizes/product/1/color/Indigo Blue/
  - returns
    - type array of objects
    - `[
    {
    "id": 204,
    "product_id": 1,
    "color": "Indigo Blue",
    "size": "2XL",
    "price": "$15.70",
    "saleprice": "$13.90",
    "numavailable": 1010
    }, etc ]`

- /api/sizes/product/:id/color/:color/size/:size"
  - Use to view all sizes for a product ID, color, and size //NOT SURE IF NEEDED//
  - Example /api/sizes/product/1/color/Indigo Blue/size/2XL
  - returns
   - type object
   - `{
    "id": 204,
    "product_id": 1,
    "color": "Indigo Blue",
    "size": "2XL",
    "price": "$15.70",
    "saleprice": "$13.90",
    "numavailable": 1010
    }`