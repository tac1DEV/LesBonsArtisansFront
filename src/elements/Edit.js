import React, { useState, useEffect } from "react";
import axios from "axios"; //npm install axios https://www.npmjs.com/package/axios
import { useParams, useNavigate } from "react-router-dom";

export default function Editproduct() {
  const [inputs, setInputs] = useState({});
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get("http://localhost:3001/api/products").then(function (response) {
      console.log(response.data);
      setProducts(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/api/products/${id}`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate(`/read/${id}`);
      });
  };
  return (
    <div>
      <h1>Edit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> name:</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>quantity:</label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter quantity"
            name="quantity"
            value={inputs.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>price:</label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" name="update">
          Update
        </button>
      </form>
    </div>
  );
}
