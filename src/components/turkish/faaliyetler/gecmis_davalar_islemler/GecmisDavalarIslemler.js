import Header from "../../header/Header";
import "./GecmisDavalarIslemler.css";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function GecmisDavalarIslemler() {
    return (
        <div>
             <Header
                
                title="Geçmiş Davalar ve İşlemler"
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
             <div className="col-12 gecmisdava" style={{padding:"2rem",fontSize:"medium"}}>
               
                <p className="davalar_islemler" style={{color:"red",fontWeight:"bold",fontSize:"large"}}> Ticari ve Ekonomik Dosyalar</p>
                <ol style={{listStyleType:"lower-latin", fontSize:"large",paddingLeft:"1rem"}}>
                   
                      
                            <li><b>Jiangsu  makine imalat Ltd şti.:  Alacak Davası</b> <br/>
                            Haziran 2016'da davayı kazanıldı ve şirketin mal varlıklarına tedbir konuldu . Türkiye Gebze tapu müdürlüğü 29 Mayıs 2017 tarih 11976 Sayılı İhalesi uyarınca . İzmir 4. İcra müdürlüğü emrince .
                            </li>
                            <li><b>Huzhou, Zhejiang dişli Ltd. şti . : Alacak Davası</b> <br/>
                            Bu dosya inceleme aşamasında , elçiliğin emri ve konuyla ilgilenmesiyle karşı taraf tamamen pasif olmuş, bütün aşamaları geçtikten sonra tarafımız tüm delilleri temin etmiş ve delil toplama ve tespit çalışmalarının tamamlanmasını sağlamıştır.
                            </li>
                            <li><b>ZheJiang makine ithalat ve ihracat holding şirketi ile bir Türk ithalat ve ihracat şirketi arasındaki uluslararası ticaret anlaşmazlığı.</b><br/>
                            Ticari anlaşmazlık, bir Türk şirketi tarafından yapılan kötü niyetli bir sahtekarlıktır. İlgili miktar: 312,021 usd 
                            </li>
                            <li><b>Taizhou'daki bir yalıtım malzemesi şirketi ile bir Türk holding şirketinin arasındaki uluslararası ticaret anlaşmazlığı.</b><br/>
                            Ticari anlaşmazlık, Türk şirketinin ekonomik etkiler nedeniyle ödemeyi geciktirmesini içeriyordu. İlgili miktar: 115,723 usd 
                            </li>
                            <li><b>Shenzhen'deki bir sanayi şirketi ile bir Türk şirketi arasındaki uluslararası ticaret anlaşmazlığı</b> <br/>
                            Ticaret anlaşmazlığı, kötü niyetli temerrüt ve gümrük mallarını elde etmek için sahte belgelerin kullanılmasını içeriyordu. İlgili miktar: 185,630 usd 

                            </li>
                            <li><b>Hangzhou ithalat ve ihracat ltd. şti.  ile Türkiye arasındaki uluslararası ticaret anlaşmazlığı</b><br/>
                            Ticaret anlaşmazlığı, bir Türk şirketinin aktarma ticaretinde kötü niyetle sözleşmeyi ihlal etmek ve gecikmiş borçlarından temerrüde düştüğü bir davadır. 64,430 Usd 
                            </li>
                            <li><b>Çin Zhejiang’daki  bir sanayi şirketi ile bir Türk şirketi arasındaki uluslararası ticaret anlaşmazlığı.</b><br/>
                            Ticari anlaşmazlık, aktarma ticareti yapan  bir Türk şirketi tarafından kasıtlı olarak sözleşme ihlali ve borcun gecikmesi durumudur. İlgili miktar: 271.266 usd 
                            </li>
                            <li><b>Huzhou ithalat ve ihracat Ltd.şti  ile bir Türk şirketi arasındaki uluslararası ticaret anlaşmazlığı.</b> <br/>
                            Dava, bir Türk şirketinin ticari ödemelerde kötü niyetle temerrüde düşmesini içeriyordu, ticaret tutarı: 121,600 usd.
                            Davanın durumu: Davanın sürecinin uzun sürmesi nedeniyle bu süreçte Türk şirketi devredildi ve dava yargılamanın ardından Çin yargısına devredildi.
                            </li>
                            <li><b>Çinli bir makine imalat şirketi ile bir Türk ithalat ve ihracat şirketi arasındaki uluslararası ticaret anlaşmazlığı.</b><br/>
                            Dava, Türkiye'deki ekonomik durumunun etkisinden dolayı bir ödeme gecikmesidir. Borç tutarı: 436,143.65 USD. 
                            </li>
                            <li><b>Jiangsu Eyaleti, Zhejiang Eyaleti, Shandong Eyaleti ve Şangay'ı da içeren bir çok çeşitli anlaşmazlık dosyaları da var.</b></li>
                </ol>
                <br/>

                <p className="davalar_islemler" style={{color:"red",fontWeight:"bold",fontSize:"large"}}> Konsolosluk Koruması</p>
                <ol style={{listStyleType:"lower-latin", fontSize:"large",paddingLeft:"1rem"}}>
                   
                      
                            <li><b>17.12.2014 Kapadokya balon ölümlü kaza (ilk uluslararası vaka) </b> <br/>
                            Ortak çalışılan avukat: Avukat Murat, 
ceza davamız kazanıldı. Karşı tarafın mücbir sebep savunması alaşağı edildi ve diğer taraf kazadan dolayı sorumluluktan ceza aldı ve dava tazminat davası aşamasına girdi.

                            </li>
                            <li><b>Konya Trafik Kazası Davası: </b> <br/>
                            Trafik Kazası ortak çalışılan Avukat: Avukat Orhan, 
3 Ağustos 2016'da Konya'da Çinliler bir trafik kazası geçirdi. Aralık 2016'da Konya Savcılığı davayı resmen açtı ve Mayıs 2017'de ihmal sonucu yaralanma suçuna karışan tarafları resmen yargıladı ve diğer tarafı Ceza Kanununa göre cezasını çekmeye mahkum etti.

                            </li>
                            <li><b>19.07.2016 Trabzon Sichuanlı  Kız binadan düşerek öldü. </b> <br/>
                            19.07.2016'da dava açıldı. Yang adlı Çinli bir kız, Trabzon'da uyuşturucu aldıktan sonra atlayarak hayatını kaybetti. Dava Türkiye'de büyük şok yarattı. Yerel polis " uyuşturucu kaynaklı halüsinasyonlar görerek binadan atlayarak intihar etti diyerek " davayı kapattı. Çin halkının onuru ve saygınlığını korumak adına bu dava büyükelçiliğin yoğun ilgisiyle ve birçok çabadan sonra Türk yerel polisinin intihar kararı bozulmuş. Başsavcılığın ve savcının onayını almıştır
                            </li>
                            <li><b>14.03.2017 Balon kazası;</b> <br/>
                            Ortak çalışılan Avukat: Avukat Orhan 
14.03.2017'de Türkiye'nin Kapadokya kentinde üç kez seri düşüş meydana geldi.14 Çin vatandaşı yaralandı. 5 Eylül 2017'de ceza, hukuk ve sigorta davaları açıldı. Haziran 2018'de ceza yargılaması başarıyla sonuçlandı.

                            </li>
                            <li><b>Yeni doğmuş bir bebeğin tıbbi kaza sonucu yaralanması davası </b> <br/>
                            Ortak çalışılan avukat: Avukat Murat 
4 Ocak 2017 tarihinde büyük bir işletmede çalışan bir çalışanın eşi İstanbul'da bir doğum hastanesinde bir erkek çocuk doğurdu. Sağlık personelinin doğum sürecinde yaptığı hatalardan kaynaklı bebek engelli doğdu. Şu anda dava zaman aşımına girmek üzere ve tüm çalışmalar yoğun ve düzenli bir şekilde devam ediyor.

                            </li>
                </ol>


                <br/>

            <p className="davalar_islemler" style={{color:"red",fontWeight:"bold",fontSize:"large"}}> Terörizm ve Ceza Davaları</p>
            <ol style={{listStyleType:"lower-latin", fontSize:"large",paddingLeft:"1rem"}}>
   
      
            <li>Ağustos 2017 yılında  Terörizme karışan XX Kai ve XX Zhen davası (uluslararası bir Çin vatandaşının terörizmden hüküm giymesi ve 8 ay hapis yattıktan sonra suçsuz bulunarak serbest bırakılması. Bu alanda ki nadir kazanılan dosyadır) 
Ortak çalışılan avukat: Avukat Orhan ve dernek avukatlarımız vekalet aldıktan sonra Ağır Ceza Mahkemesinin ikinci duruşmasında delil yetersizliğinden serbest bırakılmasını sağlamışlardır. Temmuz 2018 yılında tazminat için başvurulmuştur. Kasım ayında tazminat kazanılmıştır. Tazminat tutarını belirlemek için mahkeme bilirkişiye göndermiştir. Tazminat tutarı belirlendikten sonra ilgili devlet biriminden tazminat ödenecektir.
            </li>
            <li>25.11.2018 Kaçakçılık suçuna karışan XX Po
Ortak çalışılan avukat; Avukat Orhan ve Avukat Melih
25.11.2018 tarihinde Henan eyaletine kayıtlı XX Po ya ,Xinjiang eyaletine kayıtlı bir vatandaş tarafından Türkiye Ankara da  Diş ekipmanları fuarı tanıtılmış, fuar döneminde satın alınan ürünler gümrüğe bildirilmediğinden dolayı gümrükten çıkarken kaçakçılıktan dolayı yurtdışına çıkışı yasaklamıştır.5 Aralık ta Büyükelçiliğe başvuru yapılmış.8 Aralıkta Büyükelçilikten gelen bildirimle ortak çalışılan avukatlar Orhan ve Melih koruma sağlamış. Aynı yılın 24 Aralık tarihinde ilk duruşmada serbest bırakılması için başvuru yapılmış ,aynı zamanda serbest bırakılarak ülkesine dönmesi için başvuru yapılmış işlem süreci beklenmektedir.

            </li>
        
            </ol>

            <p className="davalar_islemler" style={{color:"red",fontWeight:"bold",fontSize:"large"}}>Çin Vatandaşının Çin Vatandaşını Dolandırdığı Dosyalar   </p>
            <ol style={{listStyleType:"lower-latin", fontSize:"large",paddingLeft:"1rem"}}>
                <li>10.08.2019 İzmir de Çinli bir firma ihbarda bulundu. Çin vatandaşı tarafından dolandırıldık.</li>
            </ol>

            <p className="davalar_islemler" style={{color:"red",fontWeight:"bold",fontSize:"large"}}> Kaza Davaları</p>
            <ol style={{listStyleType:"lower-latin", fontSize:"large",paddingLeft:"1rem"}}>
                <li>Konya trafik kazası davası kazanıldı.</li>
                <li>Kapadokya balon kazası davası temyiz kazanıldı.</li>

            </ol>
               
             </div>
         </div>
        </div>
    )
}
