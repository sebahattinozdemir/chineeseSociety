import "./İkametCalısmaİzni.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function İkametCalısmaİzni() {
    return (
        <div>
             <Header
                
                title="İkamet Çalısma İzni"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>İkamet Çalısma İzni sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
