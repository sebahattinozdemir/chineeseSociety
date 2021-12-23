import CinVector from "./cinV12.jpg";
import TurkeyVector from "./turkeyV12.jpg";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import WeChatIcon from "./weChat.png";

import FaxMachineIcon from "./faxmachine.png";
import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div class="row"  style={{marginRight:"-3rem",marginLeft:"-3rem"}}>
        <div class="col-12" style={{ backgroundColor:"#F8F9FA"}}>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%",}}>
            
            <b style={{ color: "#A4203A", fontSize: "20px"}}>Neden Biz</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            Çin Vatandaş ve Çin Şirketleri Hukuki Hak ve Menfaatlerini Koruma ve Yardımlaşma Derneği olarak
            Misyonumuz sırasıyla Çince'yi ve Çin Kültürünü Türklere tanıtmaktır. 
            Türk Kültürünü Türkiye'deki ve Çin'deki Çinlilere tanıtmaktır. 
            Çin ve Türk halkları arasında bir köprü görevi görmektir.
            Tüm üyelerimize hukuki süreçlerde danışmanlık yapıp onların sorunlarını gidermeye çalışıyoruz.
            </p>
           

          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Sosyal Medya</b>
            <hr/>
            
            <div>
                  <a className="footeremail" href="/iletisim" style={{ float: "left"}} >
                    <EmailIcon style={{fontSize:"24px"}}/>
                  </a> 
                  <p style={{fontSize:"small"}}>&nbsp;cvcshkd@gmail.com</p>
                  
                  <a className="footerphone"
                  href="tel: +903124665666"
                  style={{ float: "left"}}
                >
                  <SettingsPhoneIcon style={{fontSize:"24px"}}/> 
                 
                </a> 
                <p style={{fontSize:"small"}}>&nbsp;+90 312 466 56 66</p>

                <a className="footerfax"
                  href="tel: +903124665666"
                  style={{ float: "left"}}
                >
                  <img src={FaxMachineIcon} style={{ width:"2rem",height:"2rem" }} ></img>
                </a> 
                <p style={{fontSize:"small"}}>&nbsp; +90 312 466 56 66</p>
               
                <a
                className="footerwhatsapp"
                href="https://wa.me/+905531688953"
                style={{float: "left",fontSize:"small"}}
              >
                <WhatsAppIcon style={{ fontSize: "x-large" , color:"#00CC00" }} />   
              </a>
              <p style={{fontSize:"small"}}>&nbsp;+90 553 168 89 53</p>
              
              <div style={{display:"inline"}}>
                  <a
                    className="footerwechat"
                    href="https://www.wechat.com/"
                    target="_blank"
                    style={{float: "left" }}
                  >
                    <img className="wechat_ikon" src={WeChatIcon} style={{ width:"3rem",height:"3rem"}} ></img>
                    
                  </a>
              
                  
                  <a
                    className="footerlinkedin"
                    href="https://www.linkedin.com/in/t%C3%BCrk-%C3%A7in-k%C3%BClt%C3%BCr-derne%C4%9Fi-92aa45150/"
                    target="_blank"
                    style={{float: "left",paddingLeft:"1rem" }}
                  >
                    <LinkedInIcon className="sosyal_ikon" style={{ fontSize: "xx-large", color:"#3399FF"  }} />
                  </a>
                
                  
                  <a
                    className="footerlinkedin"
                    href="https://www.twitter.com/"
                    target="_blank"
                    style={{float: "left",paddingLeft:"1rem" }}
                  >
                    <TwitterIcon className="sosyal_ikon" style={{ fontSize: "xx-large", color:"#0080FF" }} />
                  </a>
              </div>
              
              <br/>
              <br/>
            </div>  
          </div>

        
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Türkiye Ofis</b>
            <hr/>
            
            <p><b>Adres: </b>Çankaya Mahallesi
                <br/>
                    Cinnah Caddesi No:67-69/5
                <br/>
                    Çankaya / Ankara

            </p>
            <img src={TurkeyVector} className="footerphoto" alt="Turkey" title="Turkey"></img>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>Çin Ofis</b>
            <hr/>

            <p><b>Adres: </b>
                <br/>
                    
                <br/>
                   Pekin / Çin

            </p>
            <img src={CinVector} className="footerphoto" alt="China" title="China"></img>
           
          </div>

          

          <div className="col-12">
            <p style={{color:"#f8f9fa"}}>This line was inserted in order to give a unique hr tag below the four colums</p>
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",color:"black",paddingLeft:"1rem",float:"left"}}> ©2020 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>

          
         
          
          

        </div>

        </div>

        
     
    )
}

export default Footer
