import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
export default function GiaoVien() {
    const [user, setUser] = useState("") 
    const [auth, setAuth] = useState("")
    useEffect(() => {
        Axios.get("http://localhost:3001/auth/GV", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("token"))
            }
        }).then((data) => {
            setAuth(data.data)
            if(auth === "OK"){
            const temp = localStorage.getItem("user").split('"').join('')
            Axios.put("http://localhost:3001/GV", { id: temp }).then((response) => {
                setUser(response.data[0].Username)
            });
        }
        });
    });
    if (auth === "OK"){
    return (
        <div>
        <div className="bar">
            <div className="Link">
                <a href="/thoikhoabieu">Thời Khóa Biểu</a>
                <div style={{display: "inline-block"}}>Hi {user}</div>
                <a href="/trangchu">Đăng Xuất</a>
            </div>
        </div>
        </div>
    )
    }
    else {
        return(
            <div>GET OUT </div>
        )
    }
}
