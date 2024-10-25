import React from 'react'
import  { useEffect, useState } from "react";
import "./product.css";

export default function FakeStore() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoad(false);
      }
    };

    const searchHandler=(e)=>{
      const setNewSearchedData=e.target.value;
      setSearchTerm(setNewSearchedData)

    }
  
    // Filter products based on the search term
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <>
        <center>
          <h2>Product Details</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={searchHandler} // Update search term
            className="search-bar"
          />
        </center>
        {load ? (
          <h2>Loading!!!</h2>
        ) : (
          <div className="container">
            {filteredProducts.map((product) => (
              <div className="card" key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} className="product-image"/>
                <p>{product.description}</p>
                <h3>Price: ${product.price}</h3>
                <h4>Category: {product.category}</h4>
              </div>
            ))}
          </div>
        )}
      </>
    );
}
