const { Seller, SellerRating } = require("../../db/schema/schema");

const sellerInfoCtrl = {
  sellers: {
    get: (req, res) => {
      Seller.findAll({ attributes: ["id", "name", "email"] }).then(data => {
        res.send(data);
      });
    },
    patch: {}
  },
  sellerRatings: {
    get: (req, res) => {
      SellerRating.findOne({
        attributes: ["id"],
        order: [["id", "DESC"]]
      }).then(data => {
        res.send(data);
      });
    }
  }
};

module.exports = sellerInfoCtrl;
