import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function EvlilikIcindeSorun() {
    return (
        <div>
             <Header
                
                title="Aile Hukuku Davaları"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{padding:"2rem", minHeight:"30rem"}}>
                <div className="col-12 malidanısma" style={{padding:"2rem",fontSize:"medium"}}>
                    <p style={{fontSize:"large"}}><b>Evlilik davaları :</b></p>
                    <ul>
                            <li>Boşanma davası </li>
                            <li>Evlilik içinde ihtiyati tedbir konulması  </li>
                            <li>Çocuk velayeti </li>
                            <li>Ekonomik haklar</li>
                            
                    </ul>
                    <br/>
                    <p style={{fontSize:"large"}}><b>Aile davaları :</b></p>
                    <ul>
                            <li>Miras </li>
                            <li>Mal paylaşımı </li>
                            <li>manevi tazminat  </li>
                            
                            
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}
