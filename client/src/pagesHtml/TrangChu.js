import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
import '../App.css';
export default function MainPage() {

    const [postList, setList] = useState([]);
    let history = useHistory();
    useEffect(() => {
        localStorage.clear();
        Axios.get("http://localhost:3001/api/get").then((data)=>{
            console.log(data.data)
            setList(data.data)
        });
    }, []);
    return (
        <div>
        <div className = "tieude">
            <h1>Trường Trung Học Phổ Thông PHẠM VĂN ĐỒNG</h1>
        </div>
        <div className="bar">
            <div className="Link">
                <a href="/trangchu">Trang Chủ</a>
                <a href="/login">Đăng Nhập</a>
            </div>
        </div>
        <div className="TrangChu">
            <div className="Container">
                {postList.map((val,key)=>{
                    return (
                        <div className="post" key={key} onClick={()=>{history.replace(`/post/${val.ID}`)}}>
                            <h1>{val.Title}</h1>
                            <p>{val.Text.length > 400 ? val.Text.substring(0,400) : val.Text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )
}