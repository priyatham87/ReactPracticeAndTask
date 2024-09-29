import React, { useEffect, useState } from "react";
import { eCommercePlatform } from "./api.js";
import { Special } from "./special.js";
import { Review } from "./reviews.js";
import { Tags } from "./tags.js";
import "./product.css"

export const Product = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productDetails = await fetch(
        "https://api.mockaron.com/mock/y398zoigyc/ecommerce_platform"
      );
      const result = await productDetails.json();
      setData(result);
      setLoad(false);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoad(false);
    }
  };

  return (
    <>
      <center><h2>Product Details</h2></center>
      {load ? (
        <h2>Loading!!!</h2>
      ) : (
        <div className="container">
        {eCommercePlatform.products.map((each) => {
          return (
            <div className="card" key={each.name}>
              <h2>Name:{each.name}</h2>
              <Special spl={each.specifications}></Special>
              <Review rev={each.reviews}></Review>
              <h3>DateAdded:{each.dateAdded}</h3>
              <h2>Tags:</h2>
              <Tags tag={each.tags}></Tags>
            </div>
          );
        })}
      </div>
      
      )}
    </>
  );
};
