import "./OzelDurumlardaHukukiYardım.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function OzelDurumlardaHukukiYardım() {
    return (
        <div>
             <Header
                
                title="特殊情况下的法律援助"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
             <div className="col-12 ozeldurumlar" style={{padding:"2rem",fontSize:"medium"}}>
                  <ul>
                        <li>重刑刑事案件</li>
                        <li>紧急状态下 监狱探视</li>
                        <li>紧急状态下看守所探视</li>
                        <li>紧急状态下检察院会面</li>
                        <li>紧急状态下派出所笔录</li>
                        <li>陈情书</li>
                        <li>案件调查笔录</li>
                        <li>医院紧急探视及取证</li>
                        <li>案发现场调查</li>
                        <li>护送递解出入境</li>
                        <li>重要会议参与谈判、书写法律性可信性报告</li>
                        <li>案件真实性调查</li>
                        <li>证据保全</li>
                        <li>等相关法律事务</li>

                  </ul>
             </div>
         </div>
        </div>
    )
}
