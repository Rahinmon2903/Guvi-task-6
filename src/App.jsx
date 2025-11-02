import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const handleAddToCart = (product) => {
    const result = cart.find((item) => item.id === product.id);
    if (result) {
      // increase quantity if product already exists
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // add new product with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //  Decrease quantity (not below 1)
  const SubQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //  Increase quantity
  const AddQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const [button1, setButton] = useState(true);

  //  to prevent the data while refreshing
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // every time cart updates it will rerender
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //  Remove from cart
  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <Header value={cart.reduce((acc,item)=> acc + item.quantity,0)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              button1={button1}
              setButton={setButton}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddToCart={handleAddToCart}
              AddQuantity={AddQuantity}
              SubQuantity={SubQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

