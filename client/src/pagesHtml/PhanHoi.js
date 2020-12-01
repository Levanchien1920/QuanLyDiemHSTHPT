import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
export default function PhanHoi() {
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [maHS, setMaHS] = useState("");
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
                setMaHS(temp)
                Axios.put("http://localhost:3001/HS", { id: temp }).then((response) => {
                    setUser(response.data[0].Hoten)
                });
            }
        }, [count]);
    }
    Main()
    const submitfeedback = () => {
        Axios.post('http://localhost:3001/createFeedback', { subject: subject, text: text, maHS: maHS })
        window.location.reload()
    };

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
                <div className="CreateFeedback">
                    <div className="upload">
                        <label>Subject</label>
                        <div style={{color: "black", fontSize: "17px"}}>Nhập mã môn tương ứng: (Toán: MH01, Lý: MH02, Hóa: MH03, Sinh: MH04
                        Sử: MH05, Địa: MH06, Anh: MH07, Văn: MH08, GDCD: MH09, Công nghệ: MH10, Thể dục: MH11)</div>
                        <input type="text" onChange={(e) => { setSubject(e.target.value) }} />
                        <label>Content</label>
                        <input type="textarea" onChange={(e) => { setText(e.target.value) }} />
                        <button onClick={submitfeedback}> Submit Feedback </button>
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
