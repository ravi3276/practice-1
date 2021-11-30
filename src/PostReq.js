import React, { useState } from 'react'
import './PostReq.css';
import axios from 'axios';

function PostReq() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [name, setName] = useState("")
    const data={
        Name:name,
        Email:email,
        Message:message
    }
    const config={
        headers:{
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin' : '*',
        }
    }
    const sendReq=(e)=>{
    //    axios.post('https://admin.srkprojects.com/web/api/client/v1/contact-us/',data,config)
    //     .then((res)=>{console.log(res)})
    //     .catch((err)=>{console.log(err)})

        setEmail("");
        setMessage("");
        setName("");
        e.preventDefault();
    }
    return (
        <div className="postReq">
            <form className="postReq__form">
            <input className="userEmail" placeholder="E-mail" type="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

            <input className="message" placeholder="Message" type="text" required value={message} onChange={(e)=>{setMessage(e.target.value)}}/>

            <input className="name" placeholder="Name" type="text" required value={name} onChange={(e)=>{setName(e.target.value)}}/>

            <button className="btn" onClick={sendReq}>Register</button>
            </form>
        </div>
    )
}

export default PostReq

