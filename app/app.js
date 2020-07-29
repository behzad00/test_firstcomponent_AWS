// Include the Main React Dependencies
// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react"
import ReactDOM from "react-dom"


// Include the Header Component
// var Header = require("./components/Header");
import Header from "./components/Header"




ReactDOM.render(

  // Here we deploy the header component as though it were any other HTML element
  <Header />,
  document.getElementById("app")
);