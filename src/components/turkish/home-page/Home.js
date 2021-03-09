import "./Home.css";
import homepic from "./dernekhomepic.jpg";
import Belgeler from "./belgeler/Belge";
import investment from "./investment.jpg";
import education from "./education.jpg";
import life from "./life.jpg";
import health from "./health.jpg";
import Mail from "../contact-page/mail/Mail";
import Slider from "./slider/Slider";

import Investment from "../investment/Investment";
import React, { useEffect } from 'react';



function Home() {


  return (
    <div className="row">
      
      <div className="col-12 home" style={{padding:"1rem"}}>

          <Slider/>
          
          
          
      </div>

      

        <div className="col-12 giristablo">
                <img className="girisresmi " src={homepic} style={{width:"60%",height:"40rem",margin:"auto",display:"block",align:"center"}}></img>
        </div>
      
        
      <div className="col-12 belge" style={{marginTop:"1rem",marginBottom:"2rem"}}>
            <Belgeler/>
      </div>
        
      <div className="col-12 invest" style={{marginTop:"1rem"}}>
            <Investment
                Iphoto={investment}
                Ititle="Türkiye'de Yatırım"
                Iuzanti="/turkiyede-yatirim"
                Iexplain="Türkiye 2017 yılı itibari ile dünya üzerinde en hızlı büyüyen ikinci ülke konumundadır ve Türkiye’de her şey bir yatırım aracıdır, nereye ve nasıl yatırım yapacağınızı bu sayfamızda öğretiyoruz."
            />
            <Investment
                Iphoto={life}
                Ititle="Türkiye'de Yaşam"
                Iuzanti="/turkiyede-yasam"
                Iexplain="Türkiye’de huzurlu bir yaşam için nasıl davranmalısınız, misafiri olduğunuz ülkenin örf ve adetleri nelerdir, Türkler neleri sever neleri sevmez, başucunuzdan ayırmayacağınız bir rehber hazırladık."
            />
            <Investment
                Iphoto={health}
                Ititle="Türkiye'de Sağlık"
                Iuzanti="/turkiyede-saglik"
                Iexplain="Coğrafyanın en büyük şehir hastaneleri, dünya üzerinde ün yapmış özel hastaneleri ve kalifiye doktorları ile Türkiye’de sağlık ve tedavi hakkında bilmeniz gereken her şeyi burada yazdık."
            />
            <Investment
                Iphoto={education}
                Ititle="Türkiye'de Eğitim"
                Iuzanti="/turkiyede-egitim"
                Iexplain="Yabancı öğrenciler için bir cennet olan Türkiye’de hangi okullarda nasıl eğitimler veriliyor, okul kayıt aşamaları, öğrenci ikamet izinleri, mezuniyet sonrası iş bulma süreçlerini detaylı bir şekilde öğretiyoruz."
            />
        </div>
            
            <Mail/>

            <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.593095300537!2d32.85717809978627!3d39.890760560175714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8255924da3%3A0x21e8de7da6a71210!2s%C3%87ankaya%2C%20Cinnah%20Cd.%2067-69%2C%2006690%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1609827468241!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 

            
          
       
    </div>
  );
}

export default Home;

