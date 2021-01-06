import "./EvlilikIcindeSorun.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function EvlilikIcindeSorun() {
    return (
        <div>
             <Header
                
                title="Evlilik İçinde Sorun"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Evlilik İçinde Sorun sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
