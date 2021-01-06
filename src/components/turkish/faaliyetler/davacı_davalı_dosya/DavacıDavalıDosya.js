import "./DavacıDavalıDosya.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function DavacıDavalıDosya() {
    return (
        <div>
             <Header
                
                title="Davacı veya Davalı Dosya"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
              <h3>Davacı veya Davalı Dosya sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
