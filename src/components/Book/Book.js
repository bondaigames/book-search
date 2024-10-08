import React, { Component } from "react";
import classes from "./Book.css";

class Book extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#">
              <img
                className="card-img-top"
                src="https://placehold.it/700x400"
                alt=""
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Item One</a>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur!
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;
