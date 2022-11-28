import React, { useEffect } from "react";
import { Product } from "../Interface/DataInterface";

const Smartphones = () => {
  const [product, setProduct] = React.useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProduct(data.products);
      });
  }, []);
  const newk = product.filter((val) => val.category === "smartphones");
  console.log("filter", newk);

  return <h1>Hekkkk</h1>;
};

export default Smartphones;
