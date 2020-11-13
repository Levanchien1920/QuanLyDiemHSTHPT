import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
export default function XemDiem() {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    function Main() {
        const [count, setCount] = useState(0)
        useEffect(() => {
            Axios.get("http://localhost:3001/auth/HS", {
                headers: {
                    "x-access-token": JSON.parse(localStorage.getItem("token"))
                }
            }).then((data) => {
                setAuth(data.data)
                setCount(1)
            });
            if (auth === "OK") {
                const temp = localStorage.getItem("user").split('"').join('')
                Axios.put("http://localhost:3001/HS", { id: temp }).then((response) => {
                    setUser(response.data[0].Username)
                });
            }
        }, [count]);
    }
    Main()
    if (auth === "OK") {
        return (
            <div>
                <div className="bar">
                    <div className="Link">
                        <a href="/xemdiem">Xem Điểm</a>
                        <a href="/phanhoi">Phản Hồi</a>
                        <div style={{ display: "inline-block" }}>Hi {user}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>GET OUT </div>
        )
    }
}
