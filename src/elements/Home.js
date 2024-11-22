// import { Link } from 'react-router-dom';
import axios from "axios"; //npm install axios https://www.npmjs.com/package/react-axios
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios.get("http://localhost:3001/api/products").then(function (response) {
      console.log(response.data);
      setProducts(response.data.reverse());
    });
  }
  return (
    <>
      <div>
        <div>
          <Link to="/create">Add new user</Link>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Warranty Years</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => (
            <tr key={key}>
              <Link to={`read/${product.id}/`}>
                <td>{product.name}</td>
              </Link>
              <td>{product.type}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.warranty_years}</td>
              <td>{product.available ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
