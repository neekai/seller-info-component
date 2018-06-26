const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seller_info', err => {
  if(err){throw err; console.log('There was an error connecting to db')}
  else {
    console.log('Successfully connected to db');
  }
});

const sellerSchema = mongoose.Schema({
  _id: seller_id,
  name: String,
  email: String,
  saved_by: Number,
  rating_average: {type: double, default: 5}
});

const ratingSchema = mongoose.Schema({
  _id: rating_id,
  rating: Number,
  rater: Number,
  seller_id: Number,
});

const productSchema = mongoose.Schema({
  _id: product_id,
  name: String,
  price: double,
  description: String,
  seller_id: Number
});

const imageSchema = mongoose.Schema({
  _id: image_id,
  image_url: String,
  product_id: Number
});

const Seller = mongoose.model('Seller', sellerSchema);
const Rating = mongoose.model('Rating', ratingSchema);
const Product = mongoose.model('Product', productSchema);
const Image = mongoose.model('Image', imageSchema);

