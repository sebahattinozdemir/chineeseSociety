import CinVector from "./cinV12.jpg";
import TurkeyVector from "./turkeyV12.jpg";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WeChatIcon from "./wechat.ico";
import FaxMachineIcon from "./faxmachine.png";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div class="row" id="footer" style={{ marginRight: "-3rem", marginLeft: "-3rem" }}>
      <div class="col-12" style={{ backgroundColor: "#F8F9FA" }}>
        <div
          className="col-lg-3 col-md-6 col-sm-6 col-12"
          style={{ paddingTop: "1%" }}
        >
          <b style={{ color: "#A4203A", fontSize: "20px" }}>Neden Biz</b>
          <hr />
          <p style={{ textAlign: "justify" }}>
            Çin Vatandaş ve Çin Şirketleri Hukuki Hak ve Menfaatlerini Koruma ve
            Yardımlaşma Derneği olarak Misyonumuz sırasıyla Çince'yi ve Çin
            Kültürünü Türklere tanıtmaktır. Türk Kültürünü Türkiye'deki ve
            Çin'deki Çinlilere tanıtmaktır. Çin ve Türk halkları arasında bir
            köprü görevi görmektir. Tüm üyelerimize hukuki süreçlerde
            danışmanlık yapıp onların sorunlarını gidermeye çalışıyoruz.
          </p>
        </div>

        <div
          className="col-lg-3 col-md-6 col-sm-6 col-12"
          style={{ paddingTop: "1%" }}
        >
          <b style={{ color: "#A4203A", fontSize: "20px" }}>Sosyal Medya</b>
          <hr />

                <a className="footerfax"
                  href="tel: +903124665666"
                  style={{ float: "left"}}
                >
                  <img src={FaxMachineIcon} style={{ width:"2rem",height:"2rem" }} ></img>
                </a> 
                <p style={{fontSize:"small"}}>&nbsp; +90 312 466 56 66</p>
               
                <a
                className="footerwhatsapp"
                href="https://wa.me/+905525505878"
                style={{float: "left",fontSize:"small"}}
              >
                <WhatsAppIcon style={{ fontSize: "24px" }} />   
              </a>
              <p style={{fontSize:"small"}}>&nbsp;+90 552 550 58 78</p>
              
              <div style={{display:"inline"}}>
                  <a
                    className="footerwechat"
                    href="https://www.wechat.com/"
                    target="_blank"
                    style={{float: "left" }}
                  >
                    <img src={WeChatIcon} style={{ width:"2.5rem",height:"2.5rem" }} ></img>
                    
                  </a>
              
                  
                  <a
                    className="footerlinkedin"
                    href="https://www.linkedin.com/in/t%C3%BCrk-%C3%A7in-k%C3%BClt%C3%BCr-derne%C4%9Fi-92aa45150/"
                    target="_blank"
                    style={{float: "left",paddingLeft:"1rem" }}
                  >
                    <LinkedInIcon style={{ fontSize: "24px" }} />
                  </a>
                
                  
                  <a
                    className="footerlinkedin"
                    href="https://www.twitter.com/"
                    target="_blank"
                    style={{float: "left",paddingLeft:"1rem" }}
                  >
                    <TwitterIcon style={{ fontSize: "24px" }} />
                  </a>
              </div>
              
              <br/>
              <br/>
            </div>  
          </div>

            <a
              className="footerphone"
              href="tel: +903124665666"
              style={{ float: "left" }}
            >
              <SettingsPhoneIcon style={{ fontSize: "24px" }} />
            </a>
            <p style={{ fontSize: "small" }}>&nbsp;+90 312 466 56 66</p>

            <a
              className="footerfax"
              href="tel: +903124665666"
              style={{ float: "left" }}
            >
              <img
                src={FaxMachineIcon}
                style={{ width: "2rem", height: "2rem" }}
              ></img>
            </a>
            <p style={{ fontSize: "small" }}>&nbsp;+90 312 466 56 66</p>

            <a
              className="footerwhatsapp"
              href="https://wa.me/+905525505878"
              style={{ float: "left", fontSize: "small" }}
            >
              <WhatsAppIcon style={{ fontSize: "24px" }} />
            </a>
            <p style={{ fontSize: "small" }}>&nbsp;+90 552 550 58 78</p>

            <div style={{ display: "inline" }}>
              <a
                className="footerwechat"
                href="https://www.wechat.com/"
                target="_blank"
                style={{ float: "left" }}
              >
                <img
                  src={WeChatIcon}
                  style={{ width: "2.5rem", height: "2.5rem" }}
                ></img>
              </a>

              <a
                className="footerlinkedin"
                href="https://www.linkedin.com/in/t%C3%BCrk-%C3%A7in-k%C3%BClt%C3%BCr-derne%C4%9Fi-92aa45150/"
                target="_blank"
                style={{ float: "left", paddingLeft: "3rem" }}
              >
                <LinkedInIcon style={{ fontSize: "24px" }} />
              </a>

              <a
                className="footerlinkedin"
                href="https://www.twitter.com/"
                target="_blank"
                style={{ float: "left", paddingLeft: "3rem" }}
              >
                <TwitterIcon style={{ fontSize: "24px" }} />
              </a>
            </div>

            <br />
            <br />
          </div>
      
  );
}

export default Footer;
