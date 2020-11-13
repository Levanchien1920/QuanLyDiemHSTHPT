import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
import { useParams } from 'react-router-dom'
export default function NhapDiem() {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    const [hs, setHs] = useState([]);
    let { lopID } = useParams();
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
                    setUser(response.data[0].Username)
                });
            }
            Axios.get(`http://localhost:3001/LopFromMa/${lopID}`).then((response1) => {
                setHs(response1.data)
            });
        }, [count]);
    }
    Main()
    if (auth === "OK") {
        return (
            <div>
                <div className="bar">
                    <div className="Link">
                        <a href="/thoikhoabieu">Thời Khóa Biểu</a>
                        <div style={{ display: "inline-block" }}>Hi {user}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>

                <div>
                    <div>
                        <center>
                            <table border="1">
                                <tr>
                                    <td>Mã học sinh</td>
                                    <td>Họ và tên</td>
                                    <td>Điểm giữa kỳ</td>
                                    <td>Nhập điểm giữa kỳ</td>
                                    <td>Điểm cuối kỳ</td>
                                    <td>Nhập điểm cuối kỳ</td>
                                </tr>

                                {hs.map((val1, key1) => {
                                    return (
                                        <tr>
                                            <td>{val1.MaHS}</td>
                                            <td>{val1.Hoten}</td>
                                            <td> </td>
                                            <td> <input type="text" name="nhapdiemgk"></input></td>
                                            <td></td>
                                            <td> <input type="text" name="nhapdiemck"></input></td>
                                        </tr>
                                    )
                                })}
                                <tr> <button> Lưu </button></tr>

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
