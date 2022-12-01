import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddCart from './Pages/AddCart';
import ConformOrder from './Pages/ConformOrder';
import ProductList from './Pages/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='pl-8 pr-8 pb-8'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/addtocart' element={<AddCart />} />
          <Route path='/conformation' element={<ConformOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
