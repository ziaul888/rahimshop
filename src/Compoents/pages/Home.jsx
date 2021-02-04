import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { CustomInput, Label } from "reactstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3003/product");
    setProducts(result.data);
  };

  return (
    <div className="container">
      <Label for="exampleCustomRange" className="mt-5">
        Price
      </Label>
      <CustomInput type="range" id="exampleCustomRange" name="customRange" />
      <div className="py-4">
        <table class="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product_Name</th>
              <th scope="col">Price</th>
              <th scope="col">Expiry</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.Product_name}</td>
                <td>{product.price}</td>
                <td>{product.expiry}</td>
                <td>
                  <Link className="btn btn-primary" to="/product/editproduct">
                    Edit
                  </Link>
                  <Link className="btn btn-danger">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
