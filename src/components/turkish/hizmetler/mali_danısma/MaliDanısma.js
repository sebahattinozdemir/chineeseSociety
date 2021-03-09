import "./MaliDanısma.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function MaliDanısma() {
    return (
        <div>
             <Header
                
                title="Mali Danışma"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
                <div className="col-12 malidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <ul>
                            <li>Muhasebe  Hizmeti  </li>
                            <li>Şirket Kurulumu</li>
                            <li>Vergi Açılışı </li>
                            <li>Şirketin Tüm Muhasebe Hizmetleri </li>
                            <li>Temsilcilik ve  Şube Kurulumu </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
