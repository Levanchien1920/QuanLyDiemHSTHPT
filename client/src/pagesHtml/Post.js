import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
export default function Post() {

    const [post, setPost] = useState({});
    let { postID }= useParams();
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/getFromID/${postID}`).then((data)=>{
            setPost({title: data.data[0].Title, text: data.data[0].Text})
        });
    }, );
    return (
        <div className="see">
           <h1>{post.title}</h1>
           <p>{post.text}</p>
       </div>
    );
}
