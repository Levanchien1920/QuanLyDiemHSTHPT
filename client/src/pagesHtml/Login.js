import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Login() {

    const [username, setName] = useState("");
    const [userpass, setPass] = useState("");
    const [status, setStatus] = useState("");
    localStorage.clear();
    let history = useHistory();
    const login = () => {
        if (username.substring(0,2) === "AD") {
            Axios.post('http://localhost:3001/login/admin', { username: username, userpass: userpass }).then((response) => {
                if (!response.data.auth) {
                    setStatus(response.data.message)
                }
                else {
                        localStorage.setItem("token", JSON.stringify(response.data.token))
                        localStorage.setItem("user", JSON.stringify(response.data.result[0].MaAdmin));
                        history.push("/taothongbao")
                }
            })
        }
        else if (username.substring(0,2) === "GV"){
            Axios.post('http://localhost:3001/login/GV', { username: username, userpass: userpass }).then((response) => {

                if (!response.data.auth) {
                    setStatus(response.data.message)
                }
                else {
                        localStorage.setItem("token", JSON.stringify(response.data.token))
                        localStorage.setItem("user", JSON.stringify(response.data.result[0].MaGV));
                        history.push("/giaovien")
                }
            })
        }
        else if (username.substring(0,2) === "HS"){
            Axios.post('http://localhost:3001/login/HS', { username: username, userpass: userpass }).then((response) => {

                if (!response.data.auth) {
                    setStatus(response.data.message)
                }
                else {
                        localStorage.setItem("token", JSON.stringify(response.data.token))
                        localStorage.setItem("user", JSON.stringify(response.data.result[0].MaHS));
                        history.push("/hocsinh")
                }
            })
        }
        else {
            setStatus("Không tìm thấy Username")
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
