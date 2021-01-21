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
          "Çin Vatandaş ve Çin Şirketleri Hukuki Hak ve Menfaalerini  Koruma ve Yardımlasma Derneği", Türkiye Cumhuriyeti İçişleri Bakanlığı ve Ankara Valiligi onayından sonra bir grup profesyonel avukat ve tanınmış avukat tarafından kurulan bir hukuki yardımlaşma derneği ve   sivil toplum örgütüdür. Bu derneğin asıl amacı, Çin Halk Cumhuriyeti  Büyükelçiliği ve Başkonsolosluğu rehberliğinde Türkiye Cumhuriyeti topraklarında uzun ya da kısa sureli yaşayan, seyahat amacıyla bulunan sık sık Türkiye ile iş yapan ve Türkiye’de çalişan, Çin Halk Cumhuriyeti vatandaşlari ve şirketlerine (işletme) Türkiye Cumhuriyeti topraklarında daha yetkin, profesyonel, doğru ve kapsamlı olarak hukuki haklarını korumak ve hukuki yardım hizmetinde bulunmaktır. Daha iyi bir koruma sağlayarak Çin vatandaşları ve şirketlerinin (işletmeler)  kanuni hak ve menfaatlerinin hukuka aykırı olarak ihlal edilmesine engel olmaktr. Dernek avukatlarının hizmet alanları şunları içerir ancak bunlarla sınırlı değildir: hukuki danışma; dava incelemesi;hukuki tavsiye; dava açmak; karşı dava; arabuluculuk; icra; el koyma; çeşitli adli kurumlarla koordinasyon ve iletişim; Çin vatandaşları ve Çinli şirketleri (İşletmeler) arasındaki çelişkilerin arabuluculuğu ve tüm hukuki faaliyetler. Derneğimizin tüm üyeleri, "Hukuk’un Üstünlügü", "Adil Yargılanma ve Adalet", "Müvekkil Önceliği" ilkelerini koruyacak ve avukatların mesleki etik ilkelerine ve tarafların gizlilik ilkelerine sıkı sıkıya bağlı kalacaklar,  Toplumsal kamu düzeni ve adetlerin korunmasını
kendi sorumluluğu olarak alır ve tarafların meşru haklarının ve çıkarlarının etkili bir şekilde
korunmasını sağlamaya çalışır. Derneğimizin tüm üyelerinin kişilik felsefesi "Benim şerefim sadakattir."<br/>
  Barış, eşitlik, adalet, hukukun üstünlüğü ve insanlığın ışığı yeryüzünde parlasın.


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
