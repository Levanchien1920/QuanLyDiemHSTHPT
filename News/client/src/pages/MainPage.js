import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'
export default function MainPage() {

    const [postList, setList] = useState([]);
    let history = useHistory();
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((data)=>{
            setList(data.data)
        });
    }, []);
    return (
        <div className="MainPage">
            <div className="Container">
                {postList.map((val,key)=>{
                    return (
                        <div className="post" key={key} onClick={()=>{history.replace(`/post/${val.ID}`)}}>
                            <h1>{val.Title}</h1>
                            <p>{val.Text.length > 400 ? val.Text.substring(0,400) : val.Text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
