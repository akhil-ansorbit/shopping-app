import axios from "axios";
import React, { useCallback, useEffect, useMemo } from "react";
import { Product } from "../Interface/DataInterface";
import Card from "./Card";

const Smartphones = () => {
  const [product, setProduct] = React.useState<Product[]>([]);

  const apiData = useCallback(async () => {
    try {
      const responce = await axios("https://dummyjson.com/products");
      if (responce) {
        console.log("responce", responce.data.products);
        setProduct(responce.data.products);
      }
    } catch (error) {
      console.log("err", error);
    }
  }, []);

  useEffect(() => {
    apiData();
  }, [apiData]);

  const calculation: Product[] = useMemo(() => {
    if (product) {
      const newk = product.filter((val) => val.category === "smartphones");
      return newk;
    }
    return [];
  }, [product]);

  return (
    <>
      {!!calculation &&
        calculation.map((val, id) => {
          return (
            <Card
              product={val}
              key={id}
              imgurl={val.images[0]}
              title={val.title}
              price={val.price}
              rating={val.rating}
            />
          );
        })}
    </>
  );
};

export default Smartphones;
