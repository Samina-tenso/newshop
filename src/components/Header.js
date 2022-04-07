import { Link, useNavigate } from "react-router-dom"
import { current, regUser } from "./Atom"
import { useRecoilValue } from "recoil"
import { useRecoilState } from "recoil"

export function Header() {

    const currentRole = useRecoilValue(current)
    const [currentUser, setCurrentuser] = useRecoilState(current)
    const registeredUser = useRecoilValue(regUser)
    const navigate = useNavigate()
    console.log(registeredUser)


    function handleLogOut(event) {
        event.preventDefault()
        setCurrentuser("null")
        navigate("/newshop")

    }



    return (
        <>

            {!registeredUser["id"] && <Link to="/registration"> Register </Link>}


            {
                currentRole["role"] === "user" && <Link to="/userpage"> UserPage</Link>
            }
            {(!currentUser["role"] || registeredUser["id"] && !currentUser["role"]) && <Link to="/login"> Login</Link>}
            {currentRole["role"] === "admin" && <Link to="/account"> Account</Link>}
            {currentRole["role"] === "admin" || currentRole["role"] === "user" && <button onClick={handleLogOut}> Logout</button>}


        </>
    )
}



