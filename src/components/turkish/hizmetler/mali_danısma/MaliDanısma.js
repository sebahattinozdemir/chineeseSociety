import "./MaliDanısma.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function MaliDanısma() {
    return (
        <div>
             <Header
                
                title="Mali Danışma"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Mali Danışma sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
