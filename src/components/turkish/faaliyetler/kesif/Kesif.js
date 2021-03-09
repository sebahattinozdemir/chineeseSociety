
import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function Kesif() {
    return (
        <div>
             <Header
                
                title="Keşif"
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
              <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
             <div className="col-12 kesif" style={{padding:"2rem",fontSize:"medium"}}>
                <p style={{fontSize:"large"}}>Uzun yıllardır yaptığımız işlemlere göre  Çin ve Türk şirketleri arasındaki çıkan  ticari uyuşmazlıklar genel olarak şu şekildedir:</p>
                <p style={{fontWeight:"bold",fontSize:"large",color:"red"}}>Çin;</p>
                <ol>
                    <li>Üretim, tedarik ve pazarlama yapılırken eksiksiz bir resmi sözleşme yapılmıyor. Resmi kontrat yerine proforma faturalar kullanılıyor.</li>
                    <li>Çinli avukatlar Kıta Avrupa hukuk sisteminin ilkelerine uygun olarak Anglo-sakson hukuk sistemine göre sözleşmeleri imzalayor, sorumluluklar ve haklar arasında bir kopukluğa neden oluyor.</li>
                    <li>Hukuk sistemi kavramı zayıf ve son çare değilse aktif olarak hukuki haklar aranmamakta, ve Türk şirketlerinin ödeme sözlerine güvenmekteler.</li>
                    <li>Kendini koruma bilinci zayıf, kanunu kullanarak kendi hukuki haklarını koruyamıyorlar.,</li>
                    <li>Davalarla karşılaşma durumunda hukuki haklarını yasal prosedürlere uygun olarak dürüstçe ele almamakta ve koruyamamaktalar.</li>
                    <li>Uluslararası ticaret kurallarını anlamadan bir çok ticari sözleşme uluslararası ticaret kanununa göre yapılmamakta.</li>
                    <li>Ticaret ortağını iyi  tanımadan  sadece kendi kazançlarını önemseyerek hareket edilmesi.</li>
                    <li>Aralarındaki kötü niyetli rekabetten dolayı rakibi karlı çıkarmaktalar.</li>
                    <li>Yabancı şirketlerin gücüne çok inanmakla, işbirliğinden önce şirketin itibarına ilişkin statik bir soruşturma yürütmüyorlar.</li>
                    <li>Uluslararası ticaretin resmi prosedürlerine uygun olarak akreditif kullanarak teslimat yapılmıyor ve şirketin en yüksek kazançları genelde nakit ve internette bankacılığı aracılığıyla yapılıyor.</li>
                    <li>Uzun vadeli işbirliklerinde ortakların deneyimlerine inanmak.</li>

                </ol>
                <p style={{fontWeight:"bold",fontSize:"large",color:"red"}}>Türkiye;</p>
                <ol>
                    <li>Çinli şirketlerin sorunlarını kullanarak ticari ödemelerde temerrüde düşme.</li>
                    <li>Çinli şirketler adına sahte ticari izin belgeleri düzenleniyor.</li>
                    <li>Gümrükleme işlemlerindeki zamanaşımı kullanılarak sözleşmenin kötü niyetli ihlali.</li>
                    <li>Proforma faturadaki yasal boşlukları kullanarak, sözleşme ihlallerine karşı hukuki koruma sağlamak.</li>
                    <li>Çin halkının işbirliğinde dostluğa ve uzun vadeli işbirliğinde güvenini kötüye kullanarak dolandırıcılık yapmak.</li>
                    <li>Çinlilerin yabancılarının zengin olduğu düşüncesini kullanarak dolandırıcılık yapmak.</li>
                    <li>Çinli şirketlerin araştırma yaparken gerekli özeni göstermeden hareket ettikleri için bunu kullanarak dolandırıcılık yapmak.</li>
                    <li>Sözleşme etiği önemsenmeden iki ülke arasındaki ticaret kurnazlık ve sahtekarlıkla yapılmaya çalışılıyor.</li>
                    <li>Çinli şirketler arasındaki kötü niyetli rekabeti kullanarak şantaj yapmak.</li>
                    <li>Çin şirketlerinin yalnızca anlık çıkarlar için hareketlerini kullanarak dolandırıcılık yapmak.</li>
                    <li>Güvenilirlik, dürüstlük ve uzun vadeli ilişkileri önemsemeden; yalnızca çıkarlara ve kazanılmış çıkarlara odaklanmak.</li>
                    <li>Kötü niyetli sözleşme ihlali ve dürüstlükten yoksun hareket etme.</li>
                    <li>Çinli işletmelerin ve vatandaşların yardımseverlik düşüncesini ve iş yöntemlerinden yararlanmak.</li>
                    <li>Çinli şirketlerin ve vatandaşların hukuksal işlerdeki tembelliğinden faydalanmak.</li>
                    <li>Çinli şirketlerin ve vatandaşların haklarını bilmemesinden ve intikam gütmemesinden faydalanmak.</li>
                    <li>Yabancı yatırımcıların gönüllerini hoş tutmak ve politikalarını korumak için hükümetimizin iyi niyetinden faydalanmak.</li>
                </ol>
                <p style={{fontWeight:"bold",fontSize:"large",color:"red"}}>Türkiye Yargısı;</p>
                <ol>
                    <li>Dava süreçleri uzun</li>
                    <li>Dava prosedürleri karışık</li>
                    <li>Dava aşamasında kanıt toplama maliyetli</li>
                    <li>Karşı taraf avukatı genellikle uzatma stratejileri benimser</li>
                    <li>Karşı taraf, yargı boşluklarını kullanarak mal varlığını kaçırmaya çalışır</li>
                    <li>Anglo-sakson hukuk sistemi ve kıta Avrupası hukuk sistemi arasındaki fark</li>
                    <li>Şirketlerimiz tarafından sağlanan delillerin uygunsuzluğundan kaynaklanan yargılamada gecikmeler</li>
                </ol>
             </div>
         </div>
        </div>
    )
}
