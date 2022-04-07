/*  TODO: 
display:username,userEmail, phonenumber*/
import { useRecoilValue } from "recoil"
import { current } from "./Atom"
import { Link } from "react-router-dom"
export function UserPage() {
    const user = useRecoilValue(current)
    console.log(user)

    return (

        <div>

            {user.username}
            {user.email}

            {user.adress}
            {user.number}
            {user.zipcode}
            {user.phone}
        </div>
    )
}