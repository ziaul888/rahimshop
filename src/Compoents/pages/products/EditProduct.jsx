import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditProduct = () => {
  let history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    expiry: "",
  });

  const { product_name, price, expiry } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/product/${id}`, product);
    history.push("/");
  };
  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3003/product/${id}`);
    console.log(result);
    setProduct(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">EditProduct</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="product_name"
              value={product_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Product expiry"
              name="expiry"
              value={expiry}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">UpdateProduct</button>
        </form>
      </div>
    </div>
  );
};
