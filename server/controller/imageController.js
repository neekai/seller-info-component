const { db } = require('../../db/config');

const imageController = {
  ALL: (req, res) => {
    const productID = req.params.id
    db.any("select * from images where product_id=$1", productID)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched all images")})
      .catch(err => {res.status(404); console.log("Failed to retrieve images")});
  },
  REMOVE: (req, res) => {
    
  }
  
}