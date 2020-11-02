import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Login() {

    const [username, setName] = useState("");
    const [userpass, setPass] = useState("");
    const [status, setStatus] = useState("");
    let history = useHistory();
    const login = () => {
        if (username.substring(0,2) === "AC" && userpass === "123") {
            history.push("/mainpage")
        }
        else {
            Axios.post('http://localhost:3001/login', { username: username, userpass: userpass }).then((response) => {

                if (response.data.message) {
                    setStatus(response.data.message)
                }
                else {
                    if (username.substring(0,2) === "AB") {
                        console.log(response.data);
                        localStorage.setItem("user", response.data[0].Username);
                        history.push("/createpost")
                    }
                    else {
                        console.log(response)
                    }
                }
            })
        }
    }
    return (
        <div>
            <div className="bar">
                <div className="Link">
                    <a href="/trangchu">Trang Chủ</a>
                    <a href="/login">Đăng Nhập</a>
                </div>
            </div>
            <div className="Loginpage">
                <div className="Loginform">
                    <label>Username</label>
                    <input type="text" placeholder="Username" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setPass(e.target.value)
                    }} />
                    <button onClick={login}> Login </button>
                    <div> {status}</div>
                </div>
            </div>
        </div>
    )
}
