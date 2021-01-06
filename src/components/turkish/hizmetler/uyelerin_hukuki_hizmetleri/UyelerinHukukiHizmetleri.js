import "./UyelerinHukukiHizmetleri.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function UyelerinHukukiHizmetleri() {
    return (
        <div>
             <Header
                
                title="Üyelerin Hukuki Hizmetleri"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Üyelerin Hukuki Hizmetleri sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
