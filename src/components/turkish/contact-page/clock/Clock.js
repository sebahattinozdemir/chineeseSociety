import "./Clock.css";
import CinFlag from "./cinflag.jpg";
import React, { useState } from 'react'

const Clock = () => {
    let time=new Date().toLocaleTimeString();
    const [Ctime, setCtime]=useState(time);

    const updateTime=()=> {
        time=new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime,1000);
    return(
        <>
            <div className="cerceve">
                <p className="saat">{time}</p>
              
            </div>
            
        </>
    );
}

export default Clock;
