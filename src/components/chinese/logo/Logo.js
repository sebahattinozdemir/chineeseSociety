
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
           
            <img src={DernekLogo} className="center"></img>
            <p className="serefcin" style={{letterSpacing:"22px"}}><b>&nbsp;吾之荣誉即忠诚</b></p>
        
         </div>
        

        </div>

        
     
    )
}

export default Logo
