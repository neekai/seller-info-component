const express = require("express");
const router = express.Router();
const sellerInfoCtrl = require("../controller/sellerInfoCtrl");

//  ROUTES //
//**SELLER INFO CONTROLLER**//

// SELLER //
router.route("/api/sellers").get(sellerInfoCtrl.sellers.get);
// router.route("/api/sellers").post(sellerInfoCtrl.sellers.post);

// SELLER RATINGS //
router.route("/api/sellerRatings/:id").get(sellerInfoCtrl.sellerRatings.get);

//**SELLER PRODUCTS CONTROLLER**//

module.exports = router;
