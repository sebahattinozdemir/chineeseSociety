import Header from "../header/Header";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Mail from "./mail/Mail";
import React, { useEffect, useState } from "react";



function Contact() {

  return (
    <div>
      <Header
        subtitle="İletişim"
        title="İletişim"
        icon={<ContactPhoneIcon style={{ fontSize: "x-large" }} />}
      />
      <br/>
      <Mail/>
      <br/>
      
      <div className="col-12 harita">
              
              <iframe src="https://yandex.com.tr/map-widget/v1/-/CCUMqNEVoB" className="yandexharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}></iframe>
            
            </div> 
      
    
      
      

    </div>
  );
}

export default Contact;
