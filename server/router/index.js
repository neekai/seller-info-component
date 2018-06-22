const router = require('express').Router();
const { sellerInfoController }= require('../controller/sellerInfoController');
const { sellerRatingController } = require('../controller/sellerRatingController');
const { productsController } = require('../controller/productsController');
// const sellerInfoCtrl = require("../controller/sellerInfoCtrl");
// const otherProductsCtrl = require("../controller/otherProductsCtrl");

//--ROUTES--//

//**SELLER INFO CONTROLLER**//

//Seller Info
router.route("/api/sellers")
      .get(sellerInfoController.ALL)
      .post(sellerInfoController.SAVE);

router.route("/api/sellers/:id")
      .get(sellerInfoController.ONE)
      .put(sellerInfoController.UPDATE)
      .delete(sellerInfoController.REMOVE);

//Ratings
router.route("/api/ratings/:id")
      .put(sellerRatingController.UPDATE);

//Products
router.route("/api/products")
      .get(productsController.ALL);

router.route("/api/products/:id")
      .get(productsController.ONE);

router.route("/api/seller/:id/products")
      .get(productsController.AllFromUser)
      .post(productsController.SAVE);


    

// SELLER //
// router.route("/api/sellers").get(sellerInfoCtrl.sellers.get);
// router.route("/api/sellerLiked/:id").patch(sellerInfoCtrl.sellers.patch);

// // SELLER RATINGS //
// router.route("/api/sellerRatings/:id").get(sellerInfoCtrl.sellerRatings.get);

// //**SELLER PRODUCTS CONTROLLER**//

// // SELLER //
// router.route("/api/sellers").get(otherProductsCtrl.sellers.get);

// // PRODUCT IMAGES //
// router.route("/api/productImages").get(otherProductsCtrl.images.get);

// // PRODUCTS //
// router.route("/api/products").get(otherProductsCtrl.products.get);

module.exports = router;
