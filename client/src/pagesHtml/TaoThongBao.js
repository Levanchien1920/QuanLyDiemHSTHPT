import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
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
    Main()
    const submitpost = () => {
        Axios.post('http://localhost:3001/create', { title: title, text: text })
        window.location.reload()
    };

    if (auth === "OK") {
        return (
            <div>
                <div className="bar">
                    <div className="Link">
                        <a href="/taothongbao">Create</a>
                        <a href="/taohannhapdiem"> Tạo Hạn Nhập Điểm</a>
                        <div style={{ display: "inline-block" }}>Hi {user}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>
                <div className="CreatePost">
                    <div className="upload">
                        <label>Title</label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value) }} />
                        <label>Content</label>
                        <input type="textarea" onChange={(e) => { setText(e.target.value) }} />
                        <button onClick={submitpost}> Submit Post </button>
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
