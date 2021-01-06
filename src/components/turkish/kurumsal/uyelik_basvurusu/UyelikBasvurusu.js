import "./UyelikBasvurusu.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function UyelikBasvurusu() {
    return (
        <div>
            <Header
                
                title="Üyelik Başvurusu"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
                <h3>Üyelik Başvurusu sayfasıdır</h3>
                
                
            </div>
            
        </div>
    )
}