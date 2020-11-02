import React, { useState } from 'react'
import '../App.css';
import Axios from 'axios'
export default function NhapDiem() {
    return (
        <div>
        <div className="bar">
            <div className="Link">
                <a href="/xemdiem">Xem Điểm</a>
                <a href="/phanhoi">Phản Hồi</a>
                <a href="/trangchu">Đăng Xuất</a>
            </div>
        </div>
        </div>
    )
}
