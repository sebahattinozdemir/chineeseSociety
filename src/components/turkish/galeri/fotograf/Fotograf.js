import "./Fotograf.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Fotograf() {
    return (
        <div>
             <Header
                
                title="Fotograf"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Fotograf sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
