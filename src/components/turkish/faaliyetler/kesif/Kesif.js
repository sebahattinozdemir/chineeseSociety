import "./Kesif.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Kesif() {
    return (
        <div>
             <Header
                
                title="Keşif"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Keşif sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
