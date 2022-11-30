import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddCart from './Pages/AddCart';
import ConformOrder from './Pages/ConformOrder';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='p-8'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/addtocart' element={<AddCart />} />
          <Route path='/conformation' element={<ConformOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
