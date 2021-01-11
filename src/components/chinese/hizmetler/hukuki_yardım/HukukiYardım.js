import "./HukukiYardım.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function HukukiYardım() {
    return (
        <div>
             <Header
                
                title="法律援助"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
                <div className="col-12 hukukiyardım" style={{padding:"2rem",fontSize:"medium"}}>
                    <ul>
                            <li>提供法律援助 </li>
                            <li>法律顾问服务</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}
