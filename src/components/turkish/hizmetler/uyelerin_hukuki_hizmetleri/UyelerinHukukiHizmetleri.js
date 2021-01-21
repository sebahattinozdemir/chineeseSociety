import "./UyelerinHukukiHizmetleri.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function UyelerinHukukiHizmetleri() {
    return (
        <div>
             <Header
                
                title="Üyelerin Hukuki Hizmetleri"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
                <div className="col-12 uyelerinhizmetleri" style={{padding:"2rem",fontSize:"medium"}}>
                        <p style={{textAlign:"justify"}}><b>Derneğin uyguladığı İlkeler :</b> Derneğin tüm uzman ve tecrübeli üyeleri, 
                        Çin vatandaşlarına ve Çinli şirketlere daha hızlı ve daha iyi hizmet verebilmek için çalışacaklar  ve Çin 
                        vatandaşlarının ve 
                        Çin şirketlerinin hukuki hak ve menfaatlerini yasa dışı ihlallerden korumak için her türlü çabayı göstereceklerdir.</p>
                        <p style={{textAlign:"justify"}}><b>Derneğin uyguladığı prensip : :</b> Ülkeye sadık olup ve insanlara hizmet etmek . </p> 
                        <p style={{textAlign:"justify"}}><b>Derneğin hizmet felsefesi :</b> Benim şerefim sadakattir .</p> 
                        <p style={{textAlign:"justify"}}><b>Derneğin niteliği :</b> Benim şerefim sadakattir .</p> 
                        <p style={{textAlign:"justify"}}><b>Dernek üyelerinin verdiğin hizmetler :</b>
                        
                        Yabancı vatandaşlar ve işletmeler için yurtdışı güvenlik desteği ve uyarı; Çin’in yurtdışındaki vatandaşlarının ve işletmelerinin hukuki hak ve menfaatlerinin en yüksek seviyede korunmasını sağlamak. Devletin acil durum çağrılarında, zor durumdaki Çin vatandaşlarına ve Çin işletmelerine can güvenliği ve ilgili hukuki yardım desteği; yardım desteği sağlamak için ilgili birimlerle ve Türkiye Adalet bakanlığı ile görüşmeler; tercüme; hukuki danışmanlık; Şirketlere hukuki eğitim; olay inceleme; keşif; değerlendirme; dava; dosya ile ilgili bütün yerel hukuk birimleriyle ve ilgili birimlerle görüşmeler; Çin vatandaşlarını ve Çin şirketlerini temsilen ilgili hukuk birimlerine başvuru yapılması; ilgili hukuk belgelerini onaylama; Çin vatandaşlarının ve Çin şirketlerinden bildirilen vakaların ve hakların korunması sürecinde hukuki yardım ve rehberlik; dava keşif; denetleme; Çin Vatandaşlarının ve Çin şirketlerinin hukuki haklarını korumak için uygulamalar, yasa dışı eylemlerin cezalandırılması için işlem yapmak; Çin şirketleri arasındaki hukuki işlerin arabuluculuğu; Çin vatandaşları arasındaki hukuki işlerin arabuluculuğu; ve benzeri bütün yargı ve hukuk işleri. Dernek mali müşavirleri Çin vatandaşları ve Çin şirketleri için Türkiye’de şirket kurulumu, vergi açılışı, vergi beyanlarında ve benzeri işlerde yardımcı olacaklardır.
 </p>
                        <p style={{textAlign:"justify"}}></p>
                       
      
                        


                        
       
                </div>
            </div>
        </div>
    )
}
