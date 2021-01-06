import "./Home.css";
import investment from "./investment.jpg";
import education from "./education.jpg";
import life from "./life.jpg";
import health from "./health.jpg";
import Mail from "../contact-page/mail/Mail";
import Slider from "./slider/Slider";
import Interior from "../services-interior/Interior";
import Investment from "../investment/Investment";
import React, { useEffect } from 'react';



function Home() {


  return (
    <div className="row">
      
      <div className="col-12 home" style={{marginTop:"22rem",padding:"1rem"}}>

          <Slider/>
          
          
          
      </div>
     
      <div className="col-12" style={{}}>
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

            
          
            

            

            
            
    </div>
  );
}

export default Home;

