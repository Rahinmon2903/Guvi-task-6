import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  const [cart, setCart] = useState([{
    quantity: 1
  }]);
  const [button1,setButton]=useState(true);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

// Remove from cart fuction needed for two pages so I created globally and passing as props
   const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <Header value={cart.length} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} button1={button1} setButtton={setButton} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  handleRemoveFromCart={handleRemoveFromCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
