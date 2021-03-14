import "./İkametCalısmaİzni.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function İkametCalısmaİzni() {
    return (
        <div>
             <Header
                
                title="İkamet Çalısma İzni"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem",minHeight:"30rem"}}>
            

              <div>
                  <ul>
                      <li>
                      <a className="ikametlink" href="https://e-ikamet.goc.gov.tr/" target="_blank">İkamet İzni için linke tıklayarak bilgi alabilirsiniz.</a>
                      </li>
                      <br/>
                      <li>
                      <a className="calismalink" href="https://www.goc.gov.tr/calisma-izni-sss" target="_blank">Çalışma İzni için linke tıklayarak bilgi alabilirsiniz.</a>
                      </li>
                      <br/>
                      <li className="calismalink" >Göçmenlik avukatları göçmenlik prosedürlerini profesyonelce ele alır ve oturma izinlerini yönetir.</li>
                      <li className="calismalink">Taşınır ve gayrimenkul alımları profesyonel avukatlar tarafından yapılır.</li>
                      <li className="calismalink">Çalışma ve oturma izinleri profesyonel avukatlar tarafından ele alınır.</li>
                      <li className="calismalink">Sigorta, bir sigorta avukatı tarafından yapılır.</li>

                  </ul>
                  <br/>
                  <br/>

                  <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>İkamet için Gereken Evraklar ( Turistik Oturum )</p>
                  <ul>
                    <li className="calismalink" >Başvuru Formu</li>
                    <li className="calismalink" >Sigorta (160-235 TL)</li>
                    <li className="calismalink" >4 adet Biometrik Fotoğraf</li>
                    <li className="calismalink" >Pasaport Tercümesi</li>
                    <li className="calismalink" >Kira Kontratı (Düzenleme :2000 TL,Noter Onayı :500 TL)</li>
                    <li className="calismalink" >Genel vekaletname</li>
                    <li className="calismalink" >Vize (E-vize ise dosyaya konulacak) (E-vize harcı)</li>
                    <li className="calismalink" >Harç (ikamet + kimlik bedeli)</li>
                    <li className="calismalink" >Toplam ：2500TL </li>
                    <li className="calismalink" >Kira düzenlemesi： 4000TL</li>


                  </ul>
                  
                  <br/>

                <ul>
                    <li className="calismalink" style={{listStyleType:"square"}}>Kira Kontratı geçiş ve ilk başvuru için noterde düzenleme   şeklinde yapılacaktır . Uzatmalarda noter onaylı olabilir. </li>
                    <li className="calismalink" style={{listStyleType:"square"}}>Diğer çeşitli ikamet izinleri için gerekli evraklar duyurulacaktır.</li>
                    <li className="calismalink" style={{listStyleType:"square"}}>Tüm harç bedelleri Türkiye kanunlarına ve güncel döviz kurlarına göre değişiklik gösterebilir. Yukarıdaki belirtilen bedeller için lütfen teyit alınız.</li>
                </ul>

                <br/>
                <br/>

                <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>Çalışma Vizesi</p>
                  <ul>
                    <li className="calismalink" >Pasaport veya yerine geçer belge</li>
                    <li className="calismalink" >1 adet Biometrik Fotoğraf</li>
                    <li className="calismalink" >İş veya hizmet sözleşmesi</li>
                    <li className="calismalink" >Adli sicil belgesi</li>
                    <li className="calismalink" >Çalışma vizesi en uzun 90 gün süreyle verilmektedir. Ülkeye giriş amaçlı verilen vizeden sonra ülkeye girişinden itibaren 30 gün içinde SGK işe giriş bildirisinin yapılması gerekmektedir.  </li>
                    
                  </ul>

                  <br/>
                <br/>

                <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>Çalışma İzni</p>
                  <ul>
                    <li className="calismalink" >İşveren ve yabancı tarafından imzalanmış iş sözleşmesi </li>
                    <li className="calismalink" >Pasaport sureti</li>
                    <li className="calismalink" >Türkçe tercümesi yeminli mütercim veya resmi makamlardan onaylı diploma veya geçici mezuniyet belgesi</li>
                    <li className="calismalink" >Kuruluşun en son sermaye ve ortaklık yapısını gösteren Türkiye Ticaret Sicil Gazetesi</li>
                    <li className="calismalink" >Son yıla ait vergi dairesi veya yeminli mali müşavir onaylı bilanço ve kar/zarar tablosu   </li>
                    <li className="calismalink" >COVİD-19 Taahhütnamesi  </li>
                  </ul>
                
                
                
              </div>
       
                
                
            </div>
        </div>
    )
}
