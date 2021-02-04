import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Rahimshop
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
          </ul>
          <Link className="btn btn-outline-light mr-5" to="/products/create">
            CreateProducts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
