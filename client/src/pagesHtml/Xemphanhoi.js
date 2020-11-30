import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
export default function Post() {

    const [user, setUser] = useState("")
    const [name, setName] = useState("")
    const [auth, setAuth] = useState("")
    const [classList, setClass] = useState([]);
    const [feedback, setFeedback] = useState({});
    let { feedbackID } = useParams();
    let history = useHistory();
    const [count, setCount] = useState(0)
    useEffect(() => {
        
        Axios.get("http://localhost:3001/auth/GV", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("token"))
            }
        }).then((data) => {
            setAuth(data.data)
            setCount(1)
        });
        Axios.get(`http://localhost:3001/getFromIDFeedback/${feedbackID}`).then((data) => {
            setFeedback({ monhoc: data.data[0].monhoc, text: data.data[0].noidung })
        });
        if (auth === "OK") {
            const temp = localStorage.getItem("user").split('"').join('')
            Axios.put("http://localhost:3001/GV", { id: temp }).then((response) => {
                setName(response.data[0].MaGV)
                setUser(response.data[0])
         });
           
            Axios.put("http://localhost:3001/getLop", { MaGV: temp }).then((response1) => {
                setClass(response1.data)
            })
            Axios.get(`http://localhost:3001/getFromIDFeedback/${feedbackID}`).then((data) => {
                setFeedback({ monhoc: data.data[0].monhoc, text: data.data[0].noidung })
            });
        }
    });
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
                    <div style={{ display: "inline-block" }}>Hi {name}</div>
                    <a href="/xemphanhoi">Xem phản hồi</a>
                    <a href="/trangchu">Đăng Xuất</a>
                </div>
            </div>
            <div className="seefeedback">
                <h1>{feedback.monhoc}</h1>
                <p>{feedback.text}</p>
            </div>
        </div>
    );
}
