import "./GecmisDavalarIslemler.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function GecmisDavalarIslemler() {
    return (
        <div>
             <Header
                
                title="Geçmiş Davalar ve İşlemler"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Geçmiş Davalar ve İşlemler sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
