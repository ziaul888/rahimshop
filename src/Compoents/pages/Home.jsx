import React, { useState, useEffect, Button } from "react";
import axios from "axios";

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
      <div className="py-4">
        <table class="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product_Name</th>
              <th scope="col">Price</th>
              <th scope="col">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.Product_name}</td>
                <td>{product.price}</td>
                <td>{product.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
