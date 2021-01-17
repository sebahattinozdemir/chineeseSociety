import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function EvlilikIcindeSorun() {
    return (
        <div>
             <Header
                
                title="Aile Hukuku Davaları"
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{padding:"2rem", minHeight:"30rem"}}>
                <div className="col-12 malidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <p><b>婚姻</b></p>
                    <ul>
                            <li>离婚诉讼 </li>
                            <li>婚姻存续财产保权</li>
                            <li>子女抚养权 </li>
                            <li>救济权</li>
                            
                    </ul>
                    <br/>
                    <p><b>家庭</b></p>
                    <ul>
                            <li>遗产继承 </li>
                            <li>财产分割</li>
                            <li>精神损害赔偿 </li>
                            
                            
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}
