import "./HukukiYardım.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function HukukiYardım() {
    return (
        <div>
             <Header
                
                title="Hukuki Yardım"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Hukuki Yardım sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
