import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
import { useParams} from 'react-router-dom'
export default function XemDiem() {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    const [mh, setMH] = useState([]);
   

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
                Axios.put("http://localhost:3001/HS", { id: temp }).then((response) => {
                    setUser(response.data[0].Username)
                });
                Axios.get(`http://localhost:3001/MonFromMa/${temp}`).then((response1) => {
                    setMH(response1.data)
                    console.log(mh)
                });
            }
           
        }, [count]);
    }
   
    Main()
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
                <div>
                    <div>
                        <center>
                            <table border="1">
                                <tr>
                                    <td>Tên môn học</td>
                                    <td>Điểm giữa kỳ</td>
                                    <td>Điểm cuối kỳ</td>
                                    <td>Điểm trung bình</td>
                                </tr>
                                {mh.map((val1, index) => {
                                    return (
                                        <tr key={val1.MaMH}>
                                             <td>{val1.TenMH}</td>
                                            <td>{val1.DiemGK}</td>
                                            <td>{val1.DiemCK}</td>
                                            <td></td>
                                        </tr>
                                    )
                                })}
                               
                            </table>
                        </center>
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
