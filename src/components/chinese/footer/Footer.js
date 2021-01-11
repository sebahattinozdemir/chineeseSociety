import CinVector from "./cinV12.jpg";
import TurkeyVector from "./turkeyV12.jpg";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from '@material-ui/icons/Twitter';
import WeChatIcon from "../../turkish/footer/wechat.ico";
import FaxMachineIcon from "../../turkish/footer/faxmachine.png";
import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div class="row"  style={{marginRight:"-3rem",marginLeft:"-3rem"}}>
        <div class="col-12" style={{ backgroundColor:"#F8F9FA"}}>
          
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%",}}>
            
            <b style={{ color: "#A4203A", fontSize: "20px"}}>为什么是我们</b>
            <hr/>
            <p style={{textAlign:"justify"}}>
            作为中国公民和中国公司保护合法权益与团结协会，我们的任务是分别向土耳其人介绍中国文化和中国文化。 
            土耳其和土耳其文化向中国介绍中国。 
            它是中国和土耳其人民之间的桥梁，我们为所有成员提供法律程序方面的咨询，并努力解决他们的问题
            </p>
           

          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>社交媒体</b>
            <hr/>
            <div>
                  <a className="footeremail" href="cvcshkd@gmail.com" style={{ float: "left"}} >
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

                <a className="footerphone"
                  href="tel: +903124665666"
                  style={{ float: "left"}}
                >
                  <img src={FaxMachineIcon} style={{ width:"2rem",height:"2rem" }} ></img>
                </a> 
                <p style={{fontSize:"small"}}>&nbsp;+90 312 466 56 66</p>
               
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
                    className="footerfacebook"
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
                    style={{float: "left",paddingLeft:"3rem" }}
                  >
                    <LinkedInIcon style={{ fontSize: "24px" }} />
                  </a>
                
                  
                  <a
                    className="footerlinkedin"
                    href="https://www.twitter.com/"
                    target="_blank"
                    style={{float: "left",paddingLeft:"3rem" }}
                  >
                    <TwitterIcon style={{ fontSize: "24px" }} />
                  </a>
              </div>
              
              
              <br/>
            </div>
            
            
          </div>

        
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>土耳其办事处</b>
            <hr/>
            <p><b>地址 </b>Çankaya Mahallesi
                <br/>
                    Cinnah Caddesi No:67-69/5
                <br/>
                    
                    长卡亚 / 安卡拉 / 土耳其
                    

            </p>
            <img src={TurkeyVector} className="footerphoto" alt="Turkey" title="Turkey"></img>
            
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{paddingTop:"1%"}}>
            <b style={{ color: "#A4203A", fontSize: "20px" }}>中国办事处</b>
            <hr/>

            <p><b>地址： </b>
                <br/>
                
                <br/>
                 北京 / 中国

            </p>
            <img src={CinVector} className="footerphoto" alt="China" title="China"></img>
           
          </div>

          

          <div className="col-12">
            <p style={{color:"#f8f9fa"}}>This line was inserted in order to give a unique hr tag below the four colums</p>
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",color:"black",paddingLeft:"1rem",float:"left"}}> ©2020 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <p style={{fontSize:"12px",color:"black",paddingRight:"1rem",float:"right",textAlign:"right"}}> ®Se<b>B</b>er Tech</p>
                    </div>
          </div>

          
         
          
          

        </div>

        </div>

        
     
    )
}

export default Footer
