const router = require('express').Router();
const { sellerInfoController }= require('../controller/sellerInfoController');
const { sellerRatingController } = require('../controller/sellerRatingController');
const { productsController } = require('../controller/productsController');
const { imageController } = require('../controller/imageController');
// const sellerInfoCtrl = require("../controller/sellerInfoCtrl");
// const otherProductsCtrl = require("../controller/otherProductsCtrl");

//--ROUTES--//

//**SELLER INFO CONTROLLER**//

//Seller Info
router.route("/api/sellers/all")
      .get(sellerInfoController.ALL);

router.route("/api/sellers")
      .post(sellerInfoController.SAVE)
      .get(sellerInfoController.ONE)
      .put(sellerInfoController.UPDATE);

router.route("/api/sellers/:id")
      .delete(sellerInfoController.REMOVE);

//Ratings
router.route("/api/ratings")
      .put(sellerRatingController.UPDATE)
      .get(sellerRatingController.ONE);


//Products
router.route("/api/products/all")
      .get(productsController.ALL);

router.route("/api/products")
      .get(productsController.ONE)
      .post(productsController.SAVE)

router.route("/api/products/:id")
      .put(productsController.UPDATE);

router.route("/api/seller/:id/products")
      .get(productsController.AllFromUser)
      

// router.route("/api/sller/:sellerID/products/:productID")
//       .get()

//Images
router.route("/api/images")
      .get(imageController.FETCH)
      .post(imageController.SAVE)
      .delete(imageController.REMOVE);

    

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
