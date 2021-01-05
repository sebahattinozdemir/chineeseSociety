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
      
      <div className="col-12" style={{marginTop:"5rem",padding:"1rem"}}>

          <Slider/>
          <br/>
          <Interior
                photo={'1LZTxibFFvhoQTPxw1GUUStwsnInyfkyl'}
                title="Türk Vatandaşlığı"
                uzanti="/hizmetlerimiz/turk-vatandasligi"
                explain="Yatırım yoluyla Türk vatandaşlığı (Türkiye’den ev alan yabancılara vatandaşlık) 2018 yeni programının tüm detaylarını ve danışmanlık hizmetlerimizin kapsamını burada bulabilirsiniz."
                
            />
            <Interior
                photo={"1UUKWt898yMXnzR1DDJHwky34eJ7T2ODX"}
                title="Çalışma İzni"
                uzanti="/hizmetlerimiz/calisma-izni"
                explain="Yabancıların Türkiye’de çalışma esaslarını düzenleyen 6735 Sayılı Uluslarası işgücü kanunu ve yönetmeliğine göre Çalışma izni hakkında tüm sorularınıza bu sayfamızda cevap bulabilirsiniz."
            />
            <Interior
                photo={"1lr4LRsHya9kh5Q5fg8xi1_AHmxhn9BJj"}
                title="Oturma İzni"
                uzanti="/hizmetlerimiz/oturma-izni"
                explain="Türkiye’de yabancılar için ikamet izni çeşitleri, başvuru yöntemleri ve başvuruların nasıl yapılacağına dair videolu anlatımlarla Oturma izni ile ilgili herşeyi detaylı anlatıyoruz."
            />
          
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

