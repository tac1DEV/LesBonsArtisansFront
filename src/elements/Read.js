import React, { useState, useEffect } from "react";
import axios from "axios"; //npm install axios https://www.npmjs.com/package/axios
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    axios
      .get("http://localhost:3001/api/products/" + id)
      .then(function (response) {
        console.log(response.data);
        setProduct(response.data);
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3001/api/products/${id}`)
      .then(function (response) {
        navigate(`/`);
      });
  };

  return (
    <div>
      <h1>View User</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`../edit/${product.id}/`}>Edit</Link>
            </td>
            <td>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
