import { useRecoilValue } from "recoil"
import { current } from "./Atom"
import { allUsers } from "./Atom"
import { useRecoilState } from "recoil"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { productState } from "./Atom"

export function Account() {
    const currentRole = useRecoilValue(current)
    const [currentUsers, setCurrentUsers] = useRecoilState(allUsers)
    const [products, setProducts] = useRecoilState(productState)

    useEffect(() => {
        if (currentRole["role"] === "admin") {
            fetch('https://k4backend.osuka.dev/users')
                .then(res => res.json())
                .then(json => setCurrentUsers(json))
        }
    }, [])

    useEffect(() => {
        if (currentRole["role"] === "admin") {
            fetch("https://random-data-api.com/api/users/random_user?size=10")
                .then(res => res.json())
                .then(json => setProducts(json))
        }
    }, [])


    return (
        <>


            <div className="grid grid-cols-12">
                {currentUsers.map(users => (

                    <div key={users.id}>
                        {users.username}

                    </div>
                ))}
            </div>
            <div className="grid grid-cols-12">
                {
                    products.map(product => (
                        <div key={product.id}>
                            <Link to={`/products/${product.id}`} >
                                <img src={product.avatar} alt="" />
                                {product.first_name}

                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )

}