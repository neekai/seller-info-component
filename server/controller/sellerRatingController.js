const { db } = require('../../db/config');

const sellerRatingController = {
  ONE: (req, res) => {
    const sellerID = Math.ceil(Math.random()*10000000);
    db.any('select round(AVG(rating),1) from ratings where seller_id=$1', sellerID)
      // db.any('select rating from ratings where seller_id=$1', sellerID)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched rating for seller with ID:", sellerID)})
      .catch(err => {res.status(404); console.log("Failed to fetch rating for seller with ID:", sellerID)});
  },
  UPDATE: (req, res) => {
    const sellerID = req.params.id;
    const rating = req.body.rating;
    db.none('update sellers set rating = array_append(rating, $1:value) where seller_id=$2', [req.body.rating, sellerID])
      .then(() => {res.status(200).send("Successfully updated seller rating")})
      .catch(err => {res.status(400); console.log("Failed to update seller rating", err)})
  }
  
}

module.exports = { sellerRatingController };