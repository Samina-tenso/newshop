import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { cartState, productState } from "./Atom"


export default function Cart() {
    const products = useRecoilValue(productState)
    const [cart, setCart] = useRecoilState(cartState)


    function removeCartItem(id) {
        setCart(cart.filter((item) => item.id !== id))
    }

    function getCartItem(item) {
        const product = products.find((prod) => prod.id === item.id)
        const quantity = item.qty
        return (
            <div>
                <h4>{product.first_name}</h4>
                <h4>Number:{quantity}</h4>
                <button onClick={() => removeCartItem(item.id)}>Remove</button>
            </div>
        )
    }
    return (
        <div>
            <h1> My cart</h1>
            {cart.map(getCartItem)}
        </div>
    )
}