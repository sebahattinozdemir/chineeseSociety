import Header from "../header/Header";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Mail from "./mail/Mail";
import Clock from "../contact-page/clock/Clock";
import React, { useEffect, useState } from "react";
import "./Contact.css";


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
     
      
    
      
      

    </div>
  );
}

export default Contact;
