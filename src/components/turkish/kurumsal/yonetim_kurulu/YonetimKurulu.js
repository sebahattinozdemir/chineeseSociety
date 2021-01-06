import "./YonetimKurulu.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function YonetimKurulu() {
    return (
        <div>
            <Header
                
                title="Yönetim Kurulu"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
                <h3>Yönetim Kurulu sayfasıdır</h3>
                
                
            </div>
            
        </div>
    )
}
