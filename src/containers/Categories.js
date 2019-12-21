import React, { Component } from "react";
import Category from "../components/Category/Category";

class Categories extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <h1 className="my-4">Categories</h1>
        <div className="list-group">
          <Category></Category>
          <Category></Category>
          <Category></Category>
        </div>
      </div>
    );
  }
}
export default Categories;
