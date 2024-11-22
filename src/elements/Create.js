import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addnewuser = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Données envoyées : ", inputs);
    // try {

    // } catch (error) {
    //   console.error("Erreur lors de la requête GET : ", error);
    // }
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);

    axios
      .post("http://localhost:3000/api/products", inputs)
      .then((response) => {
        console.log("Réponse du serveur : ", response.data);
        const product = response.data.product._id;
        console.log(product);
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi : ", error);
      });
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Type..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="rating"
             
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              id="rating"
              placeholder="Rating..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="warranty_years">Warranty Years</label>
            <input
              type="number"
              name="warranty_years"
              id="warranty_years"
              placeholder="Warranty Years..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="available">Available</label>
            <input
              type="checkbox"
              name="available"
              id="available"
              checked
              placeholder="Available..."
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add New Product</button>
        </form>
      </div>
    </div>
  );
};

export default Addnewuser;
