import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
export default function TaoHanNHapDiem() {

    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    function Main() {
        const [count, setCount] = useState(0)
        useEffect(() => {
            Axios.get("http://localhost:3001/auth/admin", {
                headers: {
                    "x-access-token": JSON.parse(localStorage.getItem("token"))
                }
            }).then((data) => {
                setAuth(data.data)
                setCount(1)
            });
            if (auth === "OK") {
                const temp = localStorage.getItem("user").split('"').join('')
                Axios.put("http://localhost:3001/admin", { id: temp }).then((response) => {
                    setUser(response.data[0].Username)
                });
            }
        }, [count]);
    }
    const Khoagk = () =>{
        Axios.post("http://localhost:3001/khoagk", {khoa: 1})
    }
    const Mogk = () =>{
        Axios.post("http://localhost:3001/khoagk", {khoa: 0})
    }
    const Khoack = () =>{
        Axios.post("http://localhost:3001/khoack", {khoa: 1})
    }
    const Mock = () =>{
        Axios.post("http://localhost:3001/khoack", {khoa: 0})
    }
    Main()

    if (auth === "OK") {
        return (
            <div>
                <div className="bar">
                    <div className="Link">
                        <a href="/taothongbao">Create</a>
                        <a href="/hannhapdiem"> Tạo Hạn Nhập Điểm</a>
                        <div style={{ display: "inline-block" }}>Hi {user}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>
                <div>
                    <div style={{ marginLeft: "35%", fontSize:"20px"}}>
                    <div style={{ width: "170px", display: "inline-block"}}>Khóa điểm giữa kì:</div>
                    <div style={{ display: "inline-block", marginLeft: "40px"}}> <button onClick={Khoagk}>  Khóa giữa kì </button></div>
                    <div style={{ display: "inline-block"}}> <button onClick={Mogk}> Mở giữa kì </button></div><br></br>
                    <div style={{ width: "170px", display: "inline-block"}}>Khóa điểm cuối kì:</div>
                    <div style={{ display: "inline-block", marginLeft: "40px"}}> <button onClick={Khoack}>  Khóa cuối kì </button></div>
                    <div style={{ display: "inline-block"}}> <button onClick={Mock}> Mở cuối kì </button></div>
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