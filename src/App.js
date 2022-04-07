import "./index.css"
import Cart from "./components/Cart"
import ProductItem from "./components/ProductItem"
import Products from "./components/Products"
import React, { Suspense } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { Login } from "./components/Login"
import { UserPage } from "./components/UserPage"
import { Account } from "./components/Account"
import { Header } from "./components/Header"
import { Registration } from "./components/Registration"



export default function App() {

  return (

    <div className="App">


      <Link to="/newshop">Products </Link>
      <Link to="/cart">Cart</Link>
      <Header />

      <Suspense fallback={<div> Loading...</div>}>

        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userpage" element={<UserPage />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/newshop" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Suspense>

    </div >


  );
}

