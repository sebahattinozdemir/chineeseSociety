import "./Duyuru.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Duyuru() {
    return (
        <div>
             <Header
                
                title="Duyuru"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Duyuru sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
