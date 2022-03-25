import "./index.css"
import Cart from "./components/Cart"
import ProductItem from "./components/ProductItem"
import Products from "./components/Products.js"
import React, { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"


export default function App() {

  return (

    <div className="App">
      <Link to="/newshop">Products </Link>
      <Link to="/newshop/cart">Cart</Link>
      <Suspense fallback={<div> Loading...</div>}>

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/newshop/cart" element={<Cart />} />
          <Route path="/newshop/product/:id" element={<ProductItem />} />
        </Routes>
      </Suspense>

    </div >


  );
}

