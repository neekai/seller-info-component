const { db } = require('../../db/config');

const productsController = {
  ALL: (req ,res) => {
    db.any('select * from products')
      .then(data => {res.status(200).send(data); console.log("Successfully fetched all products")})
      .catch(err => {res.status(404); console.log("Failed to fetch all products..", err)});
  },
  ONE: (req, res) => {
    const productID = Math.ceil(Math.random()*10000000);
    db.one('select * from products where product_id=$1', productID)
      .then(data => {res.status(200).send(data); console.log("Successfully fetched product with ID:", productID)})
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
  UPDATE: (req, res) => {
    db.none('update products set product_name=$1, price=$2, product_description=$3 where product_id=$4', [req.body.product_name, req.body.price, req.body.product_description, req.params.id])
      .then(() => {res.status(200).send("Updated product info"); console.log("Successfully updated product")})
      .catch(err => {res.status(400); console.log("Failed to update product")});
  },

  REMOVE: (req, res) => {
    const productID = req.params.id;
    db.result('delete from products where product_id=$1', productID)
      .then(result => {res.status(200).send("Successfully deleted product"); console.log("Successfully deleted product")})
      .catch(err => {res.status(400); console.log("Failed to delete product..", err)});
  }
}

module.exports = { productsController };