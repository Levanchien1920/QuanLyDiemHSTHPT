import React, { useState, useEffect } from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
export default function GiaoVien() {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    const [classList, setClass] = useState([]);
    let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:3001/auth/GV", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("token"))
            }
        }).then((data) => {
            setAuth(data.data)
            if (auth === "OK") {
                const temp = localStorage.getItem("user").split('"').join('')
                Axios.put("http://localhost:3001/GV", { id: temp }).then((response) => {  
                    setUser(response.data[0].Username)                
                    Axios.put("http://localhost:3001/getLop", { MaGV: temp }).then((response1) => {
                    setClass(response1.data)
                })
                });    
            }
        });
    });
    if (auth === "OK") {
        return (
            <div>
                <div className="bar">
                    <div className="Link">
                        <a href="/thoikhoabieu">Thời Khóa Biểu</a>
                        <div className="ul" style={{ display: "inline-block" }}>
                            {classList.map((val, key) => {
                                return (
                                    <div className="li" style={{ display: "inline-block" }} key={key} onClick={() => { history.push(`/nhapdiem/${val.MaLH}`) }}>
                                        <div>{val.TenLop}</div>
                                    </div>
                                )
                            })}
                        </div>
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
