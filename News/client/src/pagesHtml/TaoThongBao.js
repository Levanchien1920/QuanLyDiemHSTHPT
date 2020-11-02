import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
export default function CreatePost() {
    
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const user = localStorage.getItem("user")
    console.log(user)
    const submitpost = () =>{
        Axios.post('http://localhost:3001/api/create', {title: title, text: text})
    };

    return (
        <div>
        <div className="bar">
            <div className="Link">
                <a href="/createpost">Create</a>
                <a href="/taohannhapdiem"> Tạo Hạn Nhập Điểm</a>
                <div style={{display: "inline-block"}}>Hi {user}</div>
                <a href="/trangchu">Đăng Xuất</a>
            </div>
        </div>
        <div className="CreatePost">
            <div className="upload">
                <label>Title</label>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
                <label>Content</label>
                <input type="textarea" onChange={(e)=>{setText(e.target.value)}}/>
                <button onClick={submitpost}> Submit Post </button>
            </div>
        </div>
        </div>
    )
}
