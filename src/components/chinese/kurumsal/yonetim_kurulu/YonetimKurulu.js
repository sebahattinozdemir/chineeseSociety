import "./YonetimKurulu.css";
import u1 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u1.jpg";
import u2 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u2.jpg";
import u7 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u7.jpg";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function YonetimKurulu() {
    return (
        <div>
            <Header
                
                title="委员会"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem"}}>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u1} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >YUE ZHAO</p>
                                <p className="uye_gorev">协会会长</p>
                                
                        </div>
                    </div>
                   
                </div>
                
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u2} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >ORHAN ATIK</p>
                                <p className="uye_gorev">副会长</p>
                                
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u7} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >MEHMET SAĞLAM</p>
                                <p className="uye_gorev">秘书长</p>
                                
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}
