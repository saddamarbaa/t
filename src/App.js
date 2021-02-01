import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";
import "./App.css";

// App component(parent component)

const App = () => {
  // Declare a new state variable, which we'll call "cartItems"
  const [cartItems, setCartItems] = useState(data);
  // console.log(data);
  console.log(cartItems);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems items={cartItems} />
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
};

export default App;
