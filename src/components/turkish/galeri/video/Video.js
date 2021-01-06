import "./Video.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Video() {
    return (
        <div>
             <Header
                
                title="Video"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Video sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
