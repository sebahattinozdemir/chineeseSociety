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

            <div className="col-12 harita">
              
              <iframe src="https://yandex.com.tr/map-widget/v1/-/CCUMqNEVoB" className="yandexharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}></iframe>
            
            </div> 

            
          
       
    </div>
  );
}

export default Home;

