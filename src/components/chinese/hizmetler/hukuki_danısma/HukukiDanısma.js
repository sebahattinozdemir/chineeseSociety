import "./HukukiDanısma.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function HukukiDanısma() {
    return (
        <div>
             <Header
                
                title="法律咨询"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
          
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
                <div className="col-12 hukukidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <ul>
                            <li>法律顾问服务 </li>
                            
                    </ul>
                </div>

            </div>
        </div>
    )
}
