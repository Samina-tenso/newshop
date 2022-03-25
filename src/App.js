import "./index.css"
import Cart from "./Cart"
import ProductItem from "./ProductItem"
import Products from "./Products.js"
import React, { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"


export default function App() {

  return (

    <div className="App">
      <Link to="/">Products </Link>
      <Link to="/cart">Cart</Link>
      <Suspense fallback={<div> Loading...</div>}>

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Routes>
      </Suspense>

    </div >


  );
}

