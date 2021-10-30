
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DernekLogo from "./DernekLogoİsim.jpg";
import React from 'react'
import "./Logo.css"
function Logo() {
    return (
        <div class="row"  style={{zIndex:"1"}}>
        <div class="col-12" style={{ justifyContent:"center"}}>
           
            <img src={DernekLogo} title="Çin Hukuk Derneği" alt="Çin Hukuk Derneği" className="center"></img>
            <p className="seref"><b>Benim Şerefim Sadakattir </b></p>
        
         </div>
        

        </div>

        
     
    )
}

export default Logo
