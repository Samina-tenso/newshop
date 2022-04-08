import { regUser, userRegE, userRegM, userRegN, userRegP } from "./Atom"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

export function Registration() {
    const [userReg, setUserReg] = useRecoilState(regUser)
    const [userRegName, setUserRegName] = useRecoilState(userRegN)
    const [userRegPassword, setUserRegPassword] = useRecoilState(userRegP)
    const [userRegEmail, setUserRegEmail] = useRecoilState(userRegE)
    const [message, setMessage] = useRecoilState(userRegM)
    const navigate = useNavigate()

    function handleSubmit(event) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        event.preventDefault()

        const requestOptions = {

            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                username: userRegName,
                password: userRegPassword,
                email: userRegEmail,
            })
        }

        fetch("https://k4backend.osuka.dev/users", requestOptions)
            .then((res) => {
                return res.json()
            }).then(data =>
                setUserReg(data))
        navigate("/newshop")
    }


    return (

        <>

            < div className="w-full max-w-xs" >
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className=" mb-4">
                        <label className=" block text-gray-700 text-sm font-bold mb-2">
                            <p> Username</p>
                            <input type="text" onChange={e => setUserRegName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username"></input>
                        </label>
                    </div >
                    <div className="mb-6" >
                        <label className=" block text-gray-700 text-sm font-bold mb-2" > <p>Password </p>
                            <input tyep="password" onChange={e => setUserRegPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </label >
                    </div >
                    <div className="mb-4">
                        <label className="block" >Email</label>
                        <input type="text" placeholder="Email" onChange={e => setUserRegEmail(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="flex items-center justify-between" >
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  >
                            <h1> Create Account</h1>
                        </button >
                    </div >

                </form >
            </div >
        </>
    )
}