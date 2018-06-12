import React from "react";
import { render } from "react-dom";
import SellerInfo from "./components/SellerInfo.jsx";
import OtherProducts from "./components/OtherProducts.jsx";

render(
  <div>
    <SellerInfo />
    <br />
    <OtherProducts />
  </div>,
  document.getElementById("seller-info")
);
