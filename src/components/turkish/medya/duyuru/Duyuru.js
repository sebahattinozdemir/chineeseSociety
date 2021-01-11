import "./Duyuru.css";
import Sertifika from "./sertifika.jpg";
import c1 from "./duyururepo/cin1.jpg";
import c2 from "./duyururepo/cin2.jpg";
import c3 from "./duyururepo/cin3.jpg";
import c4 from "./duyururepo/cin4.jpg";
import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from 'react'
import { Crop169Outlined } from "@material-ui/icons";

export default function Duyuru() {
    return (
        <div>
             <Header
                
                title="Duyuru"
                icon={<AssignmentIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem",marginBottom:"2rem"}}>
          

                

                <div className="col-12 giristablo" style={{marginBottom:"2rem"}}>
                    <img className="sertifikaimg " src={Sertifika} style={{width:"60%",height:"40rem",margin:"auto",display:"block",align:"center"}}></img>
                </div>

                <br/>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                      <img src={c1} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                        <h4 style={{fontWeight:"bold"}}>Üyelikten Çıkma</h4>
                        <p style={{padding:"1%",textAlign:"justify"}}>Her üye yazılı olarak bildirmek kaydıyla, dernekten çıkma hakkına sahiptir.
                                Üyenin istifa dilekçesi yönetim kuruluna ulaştığı anda çıkış işlemleri sonuçlanmış sayılır. 
                                Üyelikten ayrılma, üyenin derneğe olan birikmiş borçlarını sona erdirmez.
                        </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                      <img src={c2} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                        <h4 style={{fontWeight:"bold"}}>Çağrı Usulü</h4>
                        <p style={{padding:"1%",textAlign:"justify"}}>Yönetim kurulu, dernek tüzüğüne göre genel kurula katılma hakkı bulunan üyelerin listesini 
                        düzenler. Genel kurula katılma hakkı bulunan üyeler, en az onbeş gün önceden, toplantının günü, saati, 
                        yeri ve gündemi en az bir gazetede veya derneğin internet sayfasında ilan edilmek, yazılı olarak bildirilmek, 
                        üyenin bildirdiği elektronik posta adresine ya da iletişim numarasına mesaj gönderilmek veya mahalli yayın araçları 
                        kullanılmak suretiyle toplantıya çağrılır.
                        </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                      <img src={c3} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                        <h4 style={{fontWeight:"bold"}}>Kayıt Usulü</h4>
                        <p style={{padding:"1%",textAlign:"justify"}}>Derneğin defter ve kayıtları Dernekler Yönetmeliğinde belirtilen usul ve esasa uygun olarak tutulur.
                        </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                      <img src={c4} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                        <h4 style={{fontWeight:"bold"}}>Defterlerin Tasdiki</h4>
                        <p style={{padding:"1%",textAlign:"justify"}}>Dernekte, tutulması zorunlu olan defterler (Büyük Defter hariç), kullanmaya başlamadan 
                        önce il dernekler müdürlüğüne veya notere tasdik ettirilir. Bu defterlerin kullanılmasına sayfaları bitene kadar devam edilir ve defterlerin 
                        ara tasdiki yapılmaz. Ancak, bilanço esasına göre tutulan Yevmiye Defteri’nin kullanılacağı yıldan önce gelen son ayda, her yıl yeniden tasdik ettirilmesi zorunludur.
                        </p>
                </div>
                
            </div>
        </div>
    )
}
