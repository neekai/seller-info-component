import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import styles from "../styles/OtherProducts.css";

class OtherProducts extends Component {
  constructor() {
    super();
    this.state = {
      sellers: false,
      images: false,
      products: false,
      compile: false
    };
  }
  componentDidMount() {
    this.sellers();
    this.compile();
  }
  sellers() {
    axios
      .get("http://localhost:7770/api/sellers")
      .then(res => this.setState({ sellers: res.data }))
      .then(() => console.log(`Current Seller Info ${this.state.sellers}`))
      .catch(err => console.log(`Error Finding Sellers ${err}`));
  }
  compile() {
    axios
      .get("http://localhost:7770/api/products")
      .then(res => this.setState({ products: res.data }))
      .then(() => {
        axios
          .get("http://localhost:7770/api/productImages/")
          .then(res => this.setState({ images: res.data }))
          .then(() => {
            let copy = this.state.images.slice();
            for (let i = 0; i < copy.length; i++) {
              copy[i].productName = this.state.products[i].name;
              copy[i].productPrice = this.state.products[
                i
              ].price.toLocaleString();
            }
            let newCopy = _.shuffle(copy).slice(0, 6);
            this.setState({ compile: newCopy });
          });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <div className={styles.otherProducts}>
          <div className={styles.more}>More from this seller</div>
          <div>
            <ul>
              {this.state.compile &&
                this.state.compile.map(infoData => (
                  <li className={styles.panel}>
                    <div className={styles.top}>
                      <img src={infoData.imageUrl} />
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.indent} className={styles.item}>
                        {infoData.productName}
                      </div>
                      <div className={styles.indent}>
                        ${infoData.productPrice.toLocaleString()}
                      </div>
                      <div
                        className={styles.indent}
                        className={styles.shipping}
                      >
                        Free shipping
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherProducts;
