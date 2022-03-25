import React from "react"
import { useRecoilValue } from "recoil"
import { Link, } from "react-router-dom"
import { productState } from "./Atom"



export default function Products() {

    const products = useRecoilValue(productState)
    console.log(products)
    return (
        <div className="grid grid-cols-4" >

            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/newshop/products/${product.id}`} >


                        <img src={product.avatar} />
                        {product.first_name}

                    </Link>
                </div>
            ))
            }

        </div >


    )
}