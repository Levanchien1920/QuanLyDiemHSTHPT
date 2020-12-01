import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
export default function Post() {

    const [name, setName] = useState("")
    const [auth, setAuth] = useState("")
    const [feedback, setFeedback] = useState([])
    const [classList, setClass] = useState([]);
    let history = useHistory();
    function Main() {
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
            if (auth === "OK") {
                const temp = localStorage.getItem("user").split('"').join('')
                Axios.put("http://localhost:3001/GV", { id: temp }).then((response) => {
                    setName(response.data[0].Hoten)
                    Axios.put("http://localhost:3001/getFeedback", { MaGV: temp, MaMH: response.data[0].MaMH }).then((response2) => {
                        setFeedback(response2.data)
                    })
                });
                Axios.put("http://localhost:3001/getLop", { MaGV: temp }).then((response1) => {
                    setClass(response1.data)
                })
            }
        }, [count]);
    }
    Main()
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
                        <a href="/xemphanhoi">Xem phản hồi</a>
                        <div style={{ display: "inline-block" }}>GV {name}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>
                <div className="TrangChu">
                    <div className="Container">
                        {feedback.map((val, key) => {
                            return (
                                <div className="post" key={key}>
                                    <p>Mã Học Sinh:{val.MaHS}</p>
                                    <p>Tên Học Sinh:{val.Hoten} </p>
                                    <p>Lớp:{val.TenLop}</p>
                                    <p>{val.noidung}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>GET OUT </div>
        )
    }
}
