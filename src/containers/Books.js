import React, { Component } from "react";
import Book from "../components/Book/Book";

class Books extends Component {
  render() {
    return (
      <div className="col-lg-9">
        <div className="my-4"></div>
        <div className="row">
          <Book></Book>
        </div>
      </div>
    );
  }
}
export default Books;
