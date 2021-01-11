import "./EvlilikIcindeSorun.css";
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
              <h3>Aile Hukuku Davaları sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
