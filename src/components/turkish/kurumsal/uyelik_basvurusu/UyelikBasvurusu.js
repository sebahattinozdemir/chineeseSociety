
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import Kayıt from "./kayıt-formu/Kayıt";
import React from 'react'

export default function UyelikBasvurusu() {
    return (
        <div>
            <Header
                
                title="Üyelik Başvurusu"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <br/>
            <Kayıt/>
            <br/>
            
        </div>
    )
}