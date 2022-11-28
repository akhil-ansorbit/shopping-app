// import { type } from "@testing-library/user-event/dist/type";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../Interface/DataInterface";

const ProductList = () => {
  const [product, setProduct] = React.useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProduct(data.products);
      });
  }, []);
  return (
    <>
      {product.map((val) => {
        console.log("values", val.images);

        return (
          <>
            <div className=" flex flex-col w-1/4 drop-shadow-lg ">
              <div className="flex">
                <img src={val.images[0]} alt="" />
              </div>
              <div className="flex">
                <h1> Title : {val.title}</h1>
              </div>
              <div className="flex justify-between">
                <span>Price : ${val.price}</span>
                <span> Rating : {val.rating}</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProductList;
