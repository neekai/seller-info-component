require('newrelic');
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");
const fs = require('fs');
require('../db/config');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../static")));

app.use("/", router);

app.listen(PORT, () => console.log(`Server Listening On ${PORT}...`));
// require('../db/fakeSellerInfoScript');
// require('../db/fakeRatingsScript');
// require('../db/fakeProductsScript');
// require('../db/fakeImagesScript');
// require('../db/mongoSellers');
// require('../db/mongoProducts');
// require('../db/mongoImages');




