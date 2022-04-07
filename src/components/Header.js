import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { current } from "./Atom"
import { useRecoilValue } from "recoil"
import { useRecoilState } from "recoil"

export function Header() {

    const currentRole = useRecoilValue(current)
    const [currentUser, setCurrentuser] = useRecoilState(current)
    const navigate = useNavigate


    function handleLogOut(event) {
        event.preventDefault()
        setCurrentuser("null")

    }



    return (
        <div>

            {
                currentRole["role"] === "user" && <Link to="/userpage"> UserPage</Link>
            }
            {currentRole["role"] === "admin" && <Link to="/account"> Account</Link>}
            {currentRole["role"] === "admin" || currentRole["role"] === "user" ? (<button onClick={handleLogOut}> Logout</button>) : (<Link to="/login"> Login </Link>)}
        </div>
    )
}



