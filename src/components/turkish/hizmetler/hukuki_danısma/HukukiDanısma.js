import "./HukukiDanısma.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function HukukiDanısma() {
    return (
        <div>
             <Header
                
                title="Hukuki Danışma"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Hukuki Danışma sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
