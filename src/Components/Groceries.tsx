import axios from 'axios';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Product } from '../Interface/DataInterface';
import Card from './Card';

const Groceries = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const apiData = useCallback(async () => {
    try {
      const responce = await axios('https://dummyjson.com/products');
      if (responce.data.length > 0) {
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

  const calculation: Product[] = useMemo(() => {
    if (products.length > 0) {
      const newk = products.filter((val) => val.category === 'groceries');
      return newk;
    }
    return [];
  }, [products]);
  return (
    <>
      {calculation.map((val, id) => {
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

export default Groceries;
