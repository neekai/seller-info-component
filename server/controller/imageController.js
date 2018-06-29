const { db } = require('../../db/config');

const imageController = {
  FETCH: (req, res) => {
    const productID = Math.ceil(Math.random()*10000000);
    console.log(productID);
    db.any("select * from images where product_id=$1", productID)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched image with ID:", productID)})
      .catch(err => {res.status(404); console.log("Failed to retrieve images")});
  },
  REMOVE: (req, res) => {
    const productID = Math.ceil(Math.random()*10000000);
    db.result('delete from images where product_id=$1 limit 1', productID)
      .then(result => {res.status(200).send(`Successfully removed image with ID ${productID}`); console.log("Successfully removed image with ID:", productID)})
      .catch(err => {res.status(400); console.log("Failed to remove image")})
  },
  SAVE: (req, res) => {
    const productID = Math.ceil(Math.random()*10000000);
    db.none('insert into images(image_url, product_id)' + 'values($1:value, $2:value)', [req.body.image_url, productID])
      .then(()=> {res.status(201).send("Added image"); console.log("Successfully added image")})
      .catch(err => {res.status(400); console.log("Failed to add image")})
  }
}

module.exports = { imageController };