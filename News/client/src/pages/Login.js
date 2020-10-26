import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
export default function Login() {

    const [username, setName] = useState("");
    const [userpass, setPass] = useState("");

    const login =()=>{
        Axios.post('http://localhost:3001/login', { username: username, userpass: userpass }).then((response)=>{
            console.log(response)
        })
    }
    return (
        <div className="Loginpage">
            <div className="Loginform">
                <label>Username</label>
                <input type="text" placeholder="Username" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <label>Password</label>
                <input type="text" placeholder="Password" onChange={(e) => {
                    setPass(e.target.value)
                }} />
                <button onClick={login}> Login </button>
            </div>
        </div>
    )
}
