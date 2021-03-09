import Header from "../header/Header";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Mail from "./mail/Mail";
import React, { useEffect, useState } from "react";



function Contact() {

  return (
    <div>
      <Header
        
        title="联系"
        icon={<ContactPhoneIcon style={{ fontSize: "x-large" }} />}
      />
      <br/>
      <Mail/>
      <br/>
      <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.593095300537!2d32.85717809978627!3d39.890760560175714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8255924da3%3A0x21e8de7da6a71210!2s%C3%87ankaya%2C%20Cinnah%20Cd.%2067-69%2C%2006690%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1609827468241!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
      </div> 
     
      
    
      
      

    </div>
  );
}

export default Contact;
