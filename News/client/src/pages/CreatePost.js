import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
export default function CreatePost() {
    
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    const submitpost = () =>{
        Axios.post('http://localhost:3001/api/create', {title: title, text: text})
    };

    return (
        <div className="CreatePost">
            <div className="upload">
                <label>Title</label>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
                <label>Content</label>
                <input type="textarea" onChange={(e)=>{setText(e.target.value)}}/>
                <button onClick={submitpost}> Submit Post </button>
            </div>
        </div>
    )
}
