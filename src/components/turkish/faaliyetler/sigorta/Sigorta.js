import "./Sigorta.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Sigorta() {
    return (
        <div>
             <Header
                
                title="Sigorta"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Sigorta sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
