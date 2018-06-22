const promise = require('bluebird');

const options = {
  promiseLib: promise
};

// const connectionString = {
//   host: 'localhost',
//   database: 'seller_info',
//   user: 'nickcai',
//   password: ''
// };

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/seller_info';
const db = pgp(connectionString);



module.exports = { db };

// const Sequelize = require("sequelize");
// const db = new Sequelize("seller_info", "nickcai", "", {
//   host: "localhost",
//   dialect: "postgresql"
// });

// db.authenticate()
//   .then(() => console.log("Database connection established"))
//   .catch(err => console.error("Unable to connect to database:", err));

// module.exports.db = db;
