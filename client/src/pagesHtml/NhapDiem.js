import React, { useState, useEffect } from 'react'
import '../App.css';
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
export default function NhapDiem() {
    const [user, setUser] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [mark, setMark] = useState("")
    const [auth, setAuth] = useState("")
    const [hs, setHs] = useState([]);
    let { lopID } = useParams();
    let history = useHistory();
    const [diemHS, setDiemHS] = useState([])
    const [vitri, setVitri] = useState([])
    const [classList, setClass] = useState([]);
    const updateFieldChanged = (index, ma) => (event) => {
        let newArr = [...diemHS];
        newArr[index] = event.target.value;
        setDiemHS(newArr);
        let newA = [...vitri];
        newA[index] = ma;
        setVitri(newA)
    }
   
    console.log(diemHS)
    console.log(vitri)

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
                    setName(response.data[0].MaGV)
                    setUser(response.data[0])
                    setId(response.data[0].MaGV)
                });
                Axios.put("http://localhost:3001/getLop", { MaGV: temp }).then((response2) => {
                    setClass(response2.data)
            })
            }
            Axios.get(`http://localhost:3001/LopFromMa/${lopID}`).then((response1) => {
                setHs(response1.data)
            });

        }, [count]);
    }
    console.log("lop:"+lopID);

    const enterMarkGK = () => {
        Axios.post('http://localhost:3001/luudiemGK', {diemHS: diemHS, vitri: vitri,malop: lopID ,id:id}).then((response) => {
            setMark(response.data)
         });
    }
    function OutGK(index){
        for (let i = 0; i < mark.length; i++) {
            if (i === index){
                return mark[i].DiemGK;
            }
        }
    }
    const enterMarkCK = () => {
        Axios.post('http://localhost:3001/luudiemCK', {diemHS: diemHS, vitri: vitri,malop: lopID ,id:id}).then((response) => {
            setMark(response.data)
         });
    }
    function OutCK(index){
        for (let i = 0; i < mark.length; i++) {
            if (i === index){
                return mark[i].DiemCK;
            }
        }
    }
    
   

    Main()

     //
  
//
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
                        <div style={{ display: "inline-block" }}>Hi {name}</div>
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

                                {hs.map((val1, index) => {
                                    return (
                                        <tr key={val1.MaHS}>
                                            <td>{val1.MaHS}</td>
                                            <td>{val1.Hoten}</td>
                                            <td> {OutGK(index)} </td>
                                            <td> <input type="text" name="nhapdiemgk" onChange={updateFieldChanged(index, val1.MaHS)}></input></td>
                                            <td>{OutCK(index)}</td>
                                            <td> <input type="text" name="nhapdiemck"onChange={updateFieldChanged(index, val1.MaHS)}></input></td>
                                        </tr>
                                    )
                                })}
                                <div style={{ display: "inline-block" }}> <button  onClick={enterMarkGK}> Lưu điểm giữa kì </button></div>
                                <div style={{ display: "inline-block" }}> <button  onClick={enterMarkCK}> Lưu điểm cuối kì </button></div>

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
