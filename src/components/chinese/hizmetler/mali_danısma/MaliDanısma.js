import "./MaliDanısma.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function MaliDanısma() {
    return (
        <div>
             <Header
                
                title="财务咨询"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
                <div className="col-12 malidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <ul>
                            <li>会计师服务 </li>
                            <li>公司注册</li>
                            <li>税务登记 </li>
                            <li>公司全套相关会计服务</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
