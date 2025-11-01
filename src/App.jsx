import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header value={cart.length} />

      <Routes>
       
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />

      
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;