import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/styles.css";

class SellerInfo extends Component {
  constructor() {
    super();
    this.state = {
      sellers: false,
      sellerRatings: false
    };
  }
  componentDidMount() {
    // Enable Once Paths And DB Are Made
    this.sellers();
    this.sellerRatings();
  }
  sellers() {
    axios
      .get("/api/sellers")
      .then(res => this.setState({ sellers: res.data }))
      .then(() => console.log(this.state.sellers))
      .catch(err => console.log(`Error Finding Sellers ${err}`));
  }
  sellerRatings() {
    axios
      .get(`/api/sellerRatings/${this.state.sellers.id}`)
      .then(res => this.setState({ sellerRatings: res.data }))
      .then(() => console.log(this.state.sellerRatings))
      .catch(err => `Error Finding Seller Ratings ${err}`);
  }
  like(id) {
    axios
      .patch(`/api/sellerLiked/${id}`)
      .then(res => console.log(`Liked User By  ID ${id}`))
      .catch(err => console.log(`Error Liking Seller ${err}`));
  }
  isLiked() {
    this.state.sellerLiked.isLiked ? "♥" : "♡";
  }
  render() {
    return (
      <div>
        {this.state.sellers &&
          this.state.sellerRatings && (
            <div className={styles.sellerInfo}>
              <div>
                <span className={styles.sellerName}>
                  {this.state.sellers[0].name}
                </span>{" "}
                <span>
                  (<a className={styles.sellerRating}>
                    {this.state.sellerRatings.id}
                  </a>)
                </span>
              </div>
              <div>99.1% Positive feedback</div>
              <hr />
              <div>
                <a
                  onClick={() => this.like(this.state.sellers[0].id)}
                  className={styles.sellerLink}
                  href
                >
                  {this.isLiked()} Save this Seller
                </a>
              </div>
              <div>
                <a
                  className={styles.sellerEmail}
                  href={
                    "mailto:" +
                    this.state.sellers[0].email +
                    "?Subject=Hello%20" +
                    this.state.sellers[0].name
                  }
                  target="_top"
                >
                  Contact seller
                </a>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default SellerInfo;
