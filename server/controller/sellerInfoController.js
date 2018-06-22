const { db } = require('../../db/config');

const sellerInfoController = {
  ALL: (req, res) => {
    db.any('select * from sellers')
      .then(data => {res.status(200).send(data); console.log("Successfully fetched all sellers")})
      .catch(err => {res.status(404); console.log('There was an err fetching all sellers', err)});
  },
  ONE: (req, res) => {
    const sellerID = req.params.id;
    db.one('select * from sellers where seller_id=$1', sellerID)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched seller with ID:", sellerID)})
      .catch(err => {res.status(404); console.log("There was an err fetching seller with ID:", sellerID)});
  },
  SAVE: (req, res) => {
    db.none('insert into sellers(seller_name, email)' + 'values(${seller_name}, ${email})', req.body)
      .then(() => {res.status(201).send("Created seller"); console.log("Successfully added seller")})
      .catch(err => {res.status(400); console.log("There was an err saving seller", err)});
  },
  UPDATE: (req, res) => {
    db.none('update sellers set seller_name=$1, email=$2 where seller_id=$3', [req.body.seller_name, req.body.email, req.params.id])
      .then(() => {res.status(200).send("Updated seller"); console.log("Successfully updated seller")})
      .catch(err => {res.status(400); console.log("There was an err updating seller", err)});
  },
  REMOVE: (req, res) => {
    const sellerID = req.params.id;
    db.result('delete from sellers where seller_id=$1', sellerID)
      .then(result => {res.status(200).send(`Successfully removed seller with ID ${sellerID}`); console.log("Successfully removed seller with ID: ", sellerID)})
      .catch(err => {res.status(400); console.log("There was an err removing seller with ID:", sellerID)});
  }
}

module.exports = { sellerInfoController };

// (req, res, next) => {
//   db.any('select * from sellers')
//     .then(function(data) {
//       console.log('suh');
//       res.status(200)
//          .json({
//            status: 'success',
//            data: data,
//            message: 'Retrieved ALL sellers'
//          });
//     })
//       .catch(err => {
//        next(err);
//     })
// }