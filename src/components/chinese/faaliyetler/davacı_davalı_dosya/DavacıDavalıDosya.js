import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function DavacıDavalıDosya() {
    return (
        <div>
             <Header
                
                title="原告或被告档案"
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{padding:"2rem", minHeight:"30rem"}}>
              <h3>Davacı veya Davalı Dosya sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
