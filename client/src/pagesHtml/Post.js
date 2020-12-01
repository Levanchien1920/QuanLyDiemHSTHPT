import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Post() {

    const [post, setPost] = useState({});
    let { postID } = useParams();
    useEffect(() => {
        Axios.get(`http://localhost:3001/getFromID/${postID}`).then((data) => {
            setPost({ title: data.data[0].tieude, text: data.data[0].noidung })
        });
    });
    return (
        <div>
            <div className="tieude">
                <h1>Trường Trung Học Phổ Thông PHẠM VĂN ĐỒNG</h1>
            </div>
            <div className="bar">
                <div className="Link">
                    <a href="/trangchu">Trang Chủ</a>
                    <a href="/login">Đăng Nhập</a>
                </div>
            </div>
            <div className="see">
                <h1>{post.title}</h1>
                <p>{post.text}</p>
            </div>
        </div>
    );
}
