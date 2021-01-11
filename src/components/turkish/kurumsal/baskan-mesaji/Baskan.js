import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from "react";
import "./Baskan.css";



function Baskan() {

    return (
        <div >
            <Header
               
                title="Başkanın Mesajı"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
            <div className="col-12" style={{padding:"2rem"}}>
      <h4 style={{textAlign:"center"}}>{""}<b>Dernek Başkanı'nın Mesajı</b></h4>
      <br/>
        <p className="card-basic">
          {" "}
          "Çin Vatandaş ve Çin Şirketleri Hukuki Hak ve Menfaatlerini  Koruma ve Yardımlasma Derneği", Türkiye Cumhuriyeti İçişleri Bakanlığı ve Ankara Valiligi onayından sonra bir grup profesyonel avukat ve tanınmış avukat tarafından kurulan bir hukuki yardimlasma derneği ve   sivil toplum örgütüdür. Bu derneğin asıl amacı, Cin Halk Cumhuriyeti  Büyükelçiliği ve Başkonsolosluğu önderliğinde Türkiye Cumhuriyeti topraklarında uzun yada kisa sureli yaşayan, seyahat amaciyla bulunan sik sik Turkiye ile is yapan ve Turkiye’de calisan, Çin Halk Cumhuriyeti vatantaslari ve sirketlerine(isletme) Türkiye Cumhuriyeti topraklarında daha yetkin, profesyonel, dogru ve kapsamlı olarak hukuki haklarini korumak ve hukuki yardim hizmetinde bulunmaktir. Daha iyi bir koruma saglayarak Çin vatandaşları ve şirketlerinin (işletmeler)  kanuni hak ve menfaatlerinin hukuka aykırı olarak ihlal edilmesine engel olmaktir. Dernek avukatlarının hizmet alanları şunları içerir ancak bunlarla sınırlı değildir: hukuki danışma; dava incelemesi;hukuki tavsiye; dava acmak; karşı dava; arabuluculuk; icra; el koyma; çeşitli adli kurumlarla koordinasyon ve iletişim; Çin vatandaşları ve Çinli şirketleri (İşletmeler) arasındaki çelişkilerin arabuluculuğu ve tüm hukuki faaliyetler. Derneğimizin tüm üyeleri, "Hukuk’un Ustunlugu", "Adil Yargilanma ve Adalet", "Muvekkil Onceligi" ilkelerini koruyacak ve avukatların mesleki etik ilkelerine ve tarafların gizlilik ilkelerine sıkı sıkıya bağlı kalacaklar,  Toplumsal kamu düzeni ve adetlerin korunmasını
kendi sorumluluğu olarak alır ve tarafların meşru haklarının ve çıkarlarının etkili bir şekilde
korunmasını sağlamaya çalışır. Derneğimizin tüm üyelerinin kişilik felsefesi "Benim şerefim sadakattir."
  Barış, adil, adalet, hukukun üstünlüğü ve insanlığın ışığı yeryüzünde parlasın.

      </p>
      <br/>
      <br/>
        <p style={{textAlign:"right",fontSize:"medium"}}>{""}<b>Dernek Başkanı / İcra Kurulu Başkanı</b></p>
        
        <br />
       
      </div>
                
                
            </div>
            
        </div>
    )
}

export default Baskan;
