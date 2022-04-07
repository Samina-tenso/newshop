import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Link, } from "react-router-dom"
import { productState } from "./Atom"
import { current } from "./Atom"



export default function Products() {
    const [products, setProducts] = useRecoilState(productState)


    const url = "https://random-data-api.com/api/users/random_user?size=10"

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    const currentRole = useRecoilValue(current)
    return (


        < div className="grid grid-cols-4" >
            {currentRole["role"] === "user" && <Link to="/userpage"> UserPage</Link>}
            {currentRole["role"] === "admin" && <Link to="/account"> Account</Link>}

            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`} >


                        <img src={product.avatar} alt="" />
                        {product.first_name}

                    </Link>
                </div>
            ))
            }

        </div >


    )
}