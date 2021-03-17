import React from "react";
import Rules from "../rules/rules";
import Header from "../Header/header";
import Sets from "../sets/sets";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Header />
      {/* <Router> */}

      <Route exact path="/" components={Sets} />
      <Route exact path="/rules" components={Rules} />

      
      {/* </Router> */}
    </div>
  );
};

export default Body;
