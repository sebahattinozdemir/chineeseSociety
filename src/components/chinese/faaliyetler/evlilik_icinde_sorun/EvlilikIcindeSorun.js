
import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function EvlilikIcindeSorun() {
    return (
        <div>
             <Header
                
                title="婚姻案例 "
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{padding:"2rem", minHeight:"30rem"}}>
              <h3>Evlilik İçinde Sorun sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
