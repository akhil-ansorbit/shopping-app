import axios from 'axios';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Product } from '../Interface/DataInterface';
import Card from './Card';

const Skincare = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const apiData = useCallback(async () => {
    try {
      const responce = await axios('https://dummyjson.com/products');
      if (responce) {
        // console.log("responce", responce.data.products);
        setProducts(responce.data.products);
      }
    } catch (error) {
      console.log('err', error);
    }
  }, []);
  useEffect(() => {
    apiData();
  }, [apiData]);

  const calculation = useMemo(() => {
    if (products) {
      const newk = products.filter((val) => val.category === 'skincare');
      return newk;
    }
    return [];
  }, [products]);
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

export default Skincare;
