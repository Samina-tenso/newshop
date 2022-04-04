import { Navigate, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { userN } from "./Atom"
import { userP } from "./Atom"
import { userData } from "./Atom"



export function Login() {
    const [userName, setUserName] = useRecoilState(userN)
    const [userPassword, setUserPassword] = useRecoilState(userP)
    const [userdata, setUserData] = useRecoilState(userData)
    /* const navigate = useNavigate()*/

    function validateForm() {
        return userName.length > 0 && userPassword.length > 0
    }


    function handleSubmit(event) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            redirect: "follow",
            headers: myHeaders,
            body: JSON.stringify({
                username: userName,
                password: userPassword
            })
        }


        fetch('https://k4backend.osuka.dev/auth/login', requestOptions)

            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setUserData(data)
                console.log(setUserData)
            }).catch(error => { console.log(error) })
    }

















    return (
        <>
            <div className="w-full max-w-xs" >
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className=" mb-4">
                        <label className=" block text-gray-700 text-sm font-bold mb-2">
                            <p> Username</p>
                            <input type="text" onChange={e => setUserName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username"></input>
                        </label>
                    </div >
                    <div className="mb-6" >
                        <label className=" block text-gray-700 text-sm font-bold mb-2" > <p>Password </p>
                            <input tyep="password" onChange={e => setUserPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </label >
                    </div >
                    <div className="flex items-center justify-between" >
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={!validateForm} >
                            <h1> Login</h1>
                        </button >
                    </div >
                </form >
            </div >
        </>
    )
}