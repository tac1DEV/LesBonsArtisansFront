import axios from "axios"; //npm install axios https://www.npmjs.com/package/react-axios
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get("http://localhost:3001/api/products").then(function (response) {
      console.log(response.data);
      setProducts(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then(function (response) {
        console.log(response.data);
        getProducts();
      });
  };

  return (
    // console.log(products.map((product, key)=>console.log(product._id)))
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, key) => (
          <tr key={key}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <Link to={`/read/${product.id}`}>Read</Link>
              <Link to={`edit/${product.id}/`}>Edit</Link>
              <button onClick={() => deleteUser(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
