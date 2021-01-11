import "./Sigorta.css";
import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function Sigorta() {
    return (
        <div>
             <Header
                
                title="保险   "
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{padding:"2rem", minHeight:"30rem"}}>
              <h3>Sigorta sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
