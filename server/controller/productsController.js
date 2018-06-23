const { db } = require('../../db/config');

const productsController = {
  ALL: (req ,res) => {
    db.any('select * from products')
      .then(data => {res.status(200).send(data); console.log("Successfully fetched all products")})
      .catch(err => {res.status(404); console.log("Failed to fetch all products..", err)});
  },
  ONE: (req, res) => {
    // const productID = req.body.id;
    db.one('select * from products where product_id=$1', req.params.id)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched product with ID:", req.params.id)})
      .catch(err => {res.status(404); console.log("Failed to fetch product with ID")})
  },
  AllFromUser: (req, res) => {
    db.any('select * from products where seller_id=$1', req.params.id)
      .then((data) => {res.status(200).send(data); console.log("Successfully fetched products from user with ID:", req.params.id)})
      .catch(err => {res.status(404); console.log("Failed to fetched products from user with ID:", req.params.id)});
  },
  SAVE: (req, res) => {
    console.log("req body..", req.body)
    db.none('insert into products(product_name, price, product_description, seller_id)' + 'values($1:value, $2:value, $3:value, $4:value)', [req.body.product_name, req.body.price, req.body.product_description, req.params.id])
      .then(()=> {res.status(201).send("Added product"); console.log("Successfully added product")})
      .catch(err => {res.status(400); console.log("Failed to add product", err)});
  },
  REMOVE: (req, res) => {
    const productID = req.params.id;
    db.result('delete from products where product_id=$1', productID)
      .then(result => {res.status(200).send("Successfully deleted product"); console.log("Successfully deleted product")})
      .catch(err => {res.status(400); console.log("Failed to delete product..", err)});
  }
}

module.exports = { productsController };