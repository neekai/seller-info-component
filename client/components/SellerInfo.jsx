import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/SellerInfoStyles.css";
const dburl = "http://18.191.155.175:7770";
class SellerInfo extends Component {
  constructor() {
    super();
    this.state = {
      sellers: false,
      sellerRatings: false,
      liked: false
    };
  }
  componentDidMount() {
    this.sellers();
    this.sellerRatings();
    // this.like(this.setLike);
  }
  sellers() {
    axios
      // .get(`${dburl}/api/sellers`)
      .get("/api/sellers")
      .then(res => {console.log(res.data); this.setState({ sellers: res.data })})
      .catch(err => console.log(`Error Finding Sellers ${err}`));
  }
  sellerRatings() {
    axios
      // .get(`${dburl}/api/sellerRatings/${this.state.sellers.id}`)
      .get("/api/ratings")
      .then(res => {
        console.log("suh", res.data[0].round);
        if (res.data[0].round === null) {
          console.log('if');
          this.setState({ sellerRatings: 5 });
        } else {
          console.log("penis", res.data[0].round);
          this.setState({ sellerRatings: res.data[0].round });
        }
      })
      .catch(err => `Error Finding Seller Ratings ${err}`);
  }
  like(id) {
    axios
      .patch(`${dburl}/api/sellerLiked/${id}`)
      .then(res => this.setState({ sellers: [res.data] }))
      .catch(err => console.log(`Error Liking Seller ${err}`));
  }

  //--------------------------------------------------------

  // like(callback){
  //   const liked = [true, false];
  //   const index = Math.floor(Math.random()*2);
  //   callback(liked[index]);
  // }

  // setLike(isLiked){
  //   this.setState({
  //     liked: isLiked
  //   })
  // }


  render() {
    return (
      <div>
        {this.state.sellers &&
          this.state.sellerRatings && (
            <div className={styles.sellerInfo}>
              <div>
                <span className={styles.sellerName}>
                  {this.state.sellers.seller_name}
                </span>{" "}
                <span>
                  (<a className={styles.sellerRating}>
                    {this.state.sellerRatings}
                  </a>)
                </span>
              </div>
              <div>{this.state.sellerRatings/5*100}% Positive feedback</div>
              <hr />
              <div>
                <a
                  onClick={() => this.like(this.state.sellers)}
                  className={styles.sellerLink}
                >
                  {this.state.sellers.liked ? "♥" : "♡"} Save this Seller
                </a>
              </div>
              <div>
                <a
                  className={styles.sellerEmail}
                  href={`mailto:${
                    this.state.sellers.email
                  }?Subject=Hello%20${this.state.sellers.name}`}
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
