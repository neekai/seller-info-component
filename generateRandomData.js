const faker = require('faker');

const sellerInfo = (context, events, done) => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const savedBy = Math.ceil(Math.random()*10000000);

  context.vars.name = name;
  context.vars.email = email;
  context.vars.saved_by = savedBy;

  return done();
};

const ratingInfo = (context, events, done) => {
  const rating = Math.ceil(Math.random()*5);
  const raterID = Math.ceil(Math.random()*10000000);
  const sellerID = Math.ceil(Math.random()*10000000);

  context.vars.rating = rating;
  context.vars.rater = raterID;
  context.vars.seller_id = sellerID;

  return done();
};

const productInfo = (context, events, done) => {
  const productName = faker.commerce.productName();
  const productPrice = faker.commerce.price();
  const productDescription = faker.lorem.sentence();
  const sellerID = Math.ceil(Math.random()*10000000);

  context.vars.product_name = productName;
  context.vars.price = productPrice;
  context.vars.product_description = productDescription;
  context.vars.seller_id = sellerID;

  return done();
}

const imageInfo = (context, events, done) => {
  const imageURL = ["https://images.pexels.com/photos/84475/night-product-watch-dramatic-84475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/371723/pexels-photo-371723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/8792/light-night-lens-shadow.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/941554/pexels-photo-941554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/414729/pexels-photo-414729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/1073772/pexels-photo-1073772.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/162788/parmigiano-reggiano-cheese-italy-italian-162788.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/50924/pexels-photo-50924.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/257239/pexels-photo-257239.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/240566/pexels-photo-240566.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/441795/pexels-photo-441795.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/353347/pexels-photo-353347.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&h=350", "https://images.pexels.com/photos/411592/pexels-photo-411592.jpeg?auto=compress&cs=tinysrgb&h=350"]
  const index = Math.ceil(Math.random()*20)
  const randomImage = imageURL[index];
  const productID = Math.ceil(Math.random()*10000000);

  context.vars.image_url = randomImage;
  context.vars.product_id = productID;

  return done();
}

module.exports = { sellerInfo, ratingInfo, productInfo, imageInfo };