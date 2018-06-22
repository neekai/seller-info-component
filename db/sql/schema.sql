DROP DATABASE IF EXISTS seller_info;

CREATE DATABASE seller_info;

\c seller_info; 

CREATE TABLE sellers (
  seller_name VARCHAR (255),
  email VARCHAR (255),
  saved_by INTEGER,
  rating_average NUMERIC DEFAULT 5,
  seller_id SERIAL PRIMARY KEY
);

CREATE TABLE ratings (
  rating INTEGER,
  rater INTEGER,
  seller_id INTEGER REFERENCES sellers(seller_id),
  rating_id SERIAL PRIMARY KEY
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR (255),
  price NUMERIC, 
  product_description TEXT,
  seller_id INTEGER REFERENCES sellers(seller_id)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR (255),
  product_id INTEGER REFERENCES products(product_id)
);



