import React from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Compoents/pages/Home";
import { CreateProducts } from "./Compoents/pages/products/CreateProducts";
import { EditProduct } from "./Compoents/pages/products/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/product/create"
            component={CreateProducts}
          ></Route>
          <Route
            exact
            path="/product/editproduct"
            component={EditProduct}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
