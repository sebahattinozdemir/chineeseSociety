import "./HukukiDanısma.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function HukukiDanısma() {
    return (
        <div>
             <Header
                
                title="Hukuki Danışma"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
          
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
                <div className="col-12 hukukidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <ul>
                            <li>Hukuki Danışmanlık Hizmeti </li>
                            
                    </ul>
                </div>

            </div>
        </div>
    )
}
