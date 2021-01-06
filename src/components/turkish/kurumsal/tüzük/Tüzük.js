import "./Tüzük.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Tüzük() {
    return (
        <div>
             <Header
                
                title="Tüzük"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Tüzük sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
