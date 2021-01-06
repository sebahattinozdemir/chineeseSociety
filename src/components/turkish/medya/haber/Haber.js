import "./Haber.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Haber() {
    return (
        <div>
             <Header
                
                title="Haber"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Haber sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
