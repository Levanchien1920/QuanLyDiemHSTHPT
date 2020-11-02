import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
export default function TaoHanNHapDiem() {
    
    return (
        <div>
        <div className="bar">
            <div className="Link">
                <a href="/createpost">Create</a>
                <a href="/hannhapdiem"> Tạo Hạn Nhập Điểm</a>
                <a href="/trangchu">Đăng Xuất</a>
                <div style={{display: "inline-block"}}>Hi </div>
            </div>
        </div>
        </div>
    )
}
