import React from "react";
import classes from "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Books from "./containers/Books";
import Categories from "./containers/Categories";

function App() {
  return (
    <React.Fragment>
      <Navigation></Navigation>

      <div className="container">
        <div className="row">
          <Categories></Categories>
          <Books></Books>
        </div>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
