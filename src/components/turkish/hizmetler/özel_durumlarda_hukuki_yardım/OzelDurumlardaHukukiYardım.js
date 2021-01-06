import "./OzelDurumlardaHukukiYardım.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function OzelDurumlardaHukukiYardım() {
    return (
        <div>
             <Header
                
                title="Özel Durumlarda Hukuki Yardım"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Özel Durumlarda Hukuki Yardım sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
