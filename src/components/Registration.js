import { regUser } from "./Atom"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

export function Registration() {
    const [userReg, setUserReg] = useRecoilState(regUser)



    const [userRegName, setUserRegName] = useState()
    const [userRegPassword, setUserRegPassword] = useState()
    const [userRegEmail, setUserRegEmail] = useState()
    const [regName, setRegName] = useState()
    const [regLastName, setRegLastName] = useState()
    const [regCity, setRegCity] = useState()
    const [regStreet, setRegStreet] = useState()
    const [regStreetNumber, setRegStreetNumber] = useState()
    const [regZipcode, setRegZipcode] = useState()
    const [regPhone, setRegPhone] = useState()
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
                role: "user",
                name: {
                    firstname: regName,
                    lastname: regLastName,
                },
                address: {
                    city: regCity,
                    street: regStreet,
                    number: regStreetNumber,
                    zipcode: regZipcode,
                },
                phone: regPhone
            })
        }


        fetch('https://k4backend.osuka.dev/users', requestOptions)
            .then(res =>
                res.json())
            .then(data =>
                setUserReg(data))
            .catch(error => {
                console.log(error)
            });
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
                    <div className="mb-4">
                        <label className="block" >First Name</label>
                        <input type="text" placeholder="Firstname" onChange={e => setRegName(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >Last Name</label>
                        <input type="text" placeholder="last Name" onChange={e => setRegLastName(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >City</label>
                        <input type="text" placeholder="City" onChange={e => setRegCity(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >Street</label>
                        <input type="text" placeholder="Street" onChange={e => setRegStreet(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >Street Number</label>
                        <input type="text" placeholder="Street Number" onChange={e => setRegStreetNumber(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >Zipcode</label>
                        <input type="text" placeholder="Zipcode" onChange={e => setRegZipcode(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block" >Phone number</label>
                        <input type="text" placeholder="Phone number" onChange={e => setRegPhone(e.target.value)} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
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