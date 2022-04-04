import "./index.css"
import Cart from "./components/Cart"
import ProductItem from "./components/ProductItem"
import Products from "./components/Products"
import React, { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { Login } from "./components/Login"


export default function App() {

  return (

    <div className="App">
      <Link to="/Login">Login </Link>
      <Link to="/newshop">Products </Link>
      <Link to="/cart">Cart</Link>
      <Suspense fallback={<div> Loading...</div>}>

        <Routes>
          <Route exact path="/login" element={<Login />}>

          </Route>
          <Route exact path="/newshop" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductItem />} />
        </Routes>
      </Suspense>

    </div >


  );
}

