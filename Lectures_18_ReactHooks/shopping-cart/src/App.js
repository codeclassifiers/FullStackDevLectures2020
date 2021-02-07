import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
export default function App() {
  const [cartItems, updateCartItems] = useState([]);
  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Products updateCartItems={updateCartItems} cartItems={cartItems} />
    </div>
  );
}
