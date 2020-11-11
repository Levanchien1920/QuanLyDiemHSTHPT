import React, { useState, useEffect } from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
export default function GiaoVien() {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState("")
    const [classList, setClass] = useState([]);
    let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:3001/auth/GV", {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem("token"))
            }
        }).then((data) => {
            setAuth(data.data)
            if (auth === "OK") {
                const temp = localStorage.getItem("user").split('"').join('')
                Axios.put("http://localhost:3001/GV", { id: temp }).then((response) => {  
                    setUser(response.data[0])                
                    Axios.put("http://localhost:3001/getLop", { MaGV: temp }).then((response1) => {
                    setClass(response1.data)
                })
                });    
            }
        });
    });
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
                        <div style={{ display: "inline-block" }}>Hi {user.MaGV}</div>
                        <a href="/trangchu">Đăng Xuất</a>
                    </div>
                </div>

                <div className="see">
                        <center>

                            <table border="1">
                                <tr>
                                    <td></td>
                                    <td> Tiết 1</td>
                                    <td> Tiết 2</td>
                                    <td> Tiết 3</td>
                                    <td> Tiết 4</td>
                                    <td> Tiết 5</td>

                                </tr>

                                <tr>
                                    <td> Thứ hai</td>
                                    <td>{user.Thu2Tiet1}</td>
                                    <td>{user.Thu2Tiet2}</td>
                                    <td>{user.Thu2Tiet3}</td>
                                    <td>{user.Thu2Tiet4}</td>
                                    <td>{user.Thu2Tiet5}</td>
                                </tr>
                                <tr>
                                    <td> Thứ ba</td>
                                    <td>{user.Thu3Tiet1}</td>
                                    <td>{user.Thu3Tiet2}</td>
                                    <td>{user.Thu3Tiet3}</td>
                                    <td>{user.Thu3Tiet4}</td>
                                    <td>{user.Thu3Tiet5}</td>
                                </tr>

                                <tr>
                                    <td> Thứ tư</td>
                                    <td>{user.Thu4Tiet1}</td>
                                    <td>{user.Thu4Tiet2}</td>
                                    <td>{user.Thu4Tiet3}</td>
                                    <td>{user.Thu4Tiet4}</td>
                                    <td>{user.Thu4Tiet5}</td>
                                </tr>

                                <tr>
                                    <td> Thứ năm</td>
                                    <td>{user.Thu5Tiet1}</td>
                                    <td>{user.Thu5Tiet2}</td>
                                    <td>{user.Thu5Tiet3}</td>
                                    <td>{user.Thu5Tiet4}</td>
                                    <td>{user.Thu5Tiet5}</td>
                                </tr>

                                <tr>
                                    <td> Thứ sáu</td>
                                    <td>{user.Thu6Tiet1}</td>
                                    <td>{user.Thu6Tiet2}</td>
                                    <td>{user.Thu6Tiet3}</td>
                                    <td>{user.Thu6Tiet4}</td>
                                    <td>{user.Thu6Tiet5}</td>
                                </tr>

                                <tr>
                                    <td> Thứ bảy</td>
                                    <td>{user.Thu7Tiet1}</td>
                                    <td>{user.Thu7Tiet2}</td>
                                    <td>{user.Thu7Tiet3}</td>
                                    <td>{user.Thu7Tiet4}</td>
                                    <td>{user.Thu7Tiet5}</td>
                                </tr>




                            </table>

                        </center>


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
