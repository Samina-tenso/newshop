
import { useRecoilValue, useRecoilState } from "recoil"
import { cartState, productState } from "./Atom"
import { useParams } from "react-router-dom"

export default function ProductItem() {

    const [cart, setCart] = useRecoilState(cartState)

    function addToCart() {
        const newItem = {
            id: product.id,
            qty: 1,
        }
        setCart([...cart, newItem])

    }

    const params = useParams()

    const products = useRecoilValue(productState)

    const product = products.find(prod => prod.id === parseInt(params.id))
    console.log(product)

    return (
        <div>

            <img src={product.avatar} />

            <button onClick={addToCart}> Add to Cart</button>

        </div>
    )
}


