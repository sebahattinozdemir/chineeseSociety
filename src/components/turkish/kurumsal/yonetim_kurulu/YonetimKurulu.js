import u1 from "../uyelerimiz/uyeler/u1.jpg";
import u2 from "../uyelerimiz/uyeler/u2.jpg";
import u7 from "../uyelerimiz/uyeler/u7.jpg";
import "./YonetimKurulu.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function YonetimKurulu() {
    return (
        <div>
            <Header
                
                title="Yönetim Kurulu"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem", minHeight:"30rem"}}>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
                    <div className="uye_cerceve">
                        <img src={u1} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >YUE ZHAO</p>
                                <p className="uye_gorev">Dernek Başkanı</p>
                                
                        </div>
                    </div>
                   
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
                    <div className="uye_cerceve">
                        <img src={u2} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >ORHAN ATIK</p>
                                <p className="uye_gorev">Başkan Yardımıcısı</p>
                                
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
                    <div className="uye_cerceve">
                        <img src={u7} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >MEHMET SAĞLAM</p>
                                <p className="uye_gorev">Genel Sekreter</p>
                                
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}
