import u3 from "./uyeler/u3.jpg";
import u4 from "./uyeler/u4.jpg";
import u5 from "./uyeler/u5.jpg";
import u6 from "./uyeler/u6.jpg";
import u8 from "./uyeler/u8.jpg";
import u9 from "./uyeler/u9.jpg";
import u10 from "./uyeler/u10.jpg";
import u11 from "./uyeler/u11.jpg";
import u12 from "./uyeler/u12.jpg";
import u13 from "./uyeler/u13.jpg";
import "./Uyeler.css";
import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from 'react'

export default function Uyeler() {
    return (
        <div>
            <Header
                
                title="Üyelerimiz"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem"}}>
               
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u3} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >MURAT ERDAL</p>
                                <p className="uye_gorev">Y.K Üyesi</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u4} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >BESİM MELİH</p>
                                <p className="uye_gorev">Y.K Üyesi</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u5} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >FATİH SÖNMEZ</p>
                                <p className="uye_gorev">Y.K Üyesi</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u6} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >ESRA GELENER KILIÇ</p>
                                <p className="uye_gorev">Y.K Üyesi</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u8} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >KADRİYE ZEYNEP ÖZGENÇ</p>
                                <p className="uye_gorev">Y.K Üyesi</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u9} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >SHAKHRIZODA ABIDOVA</p>
                                <p className="uye_gorev">Başkan Sekreteri</p>
                                <p className="uye_meslek">Sekreter</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u10} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >MEHMET OKKALI</p>
                                <p className="uye_gorev">Mali Müşavir</p>
                                <p className="uye_meslek">Mali Müşavir</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u11} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >İSTİKBAL SAĞLAM</p>
                                <p className="uye_gorev">Mali Müşavir</p>
                                <p className="uye_meslek">Mali Müşavir</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u12} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >BÜŞRA GÜLEÇ</p>
                                <p className="uye_gorev">Avukat</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 uye_temp">
                    <div className="uye_cerceve">
                        <img src={u13} className="uye_card" alt="Türk-Çin Derneği Üyeleri" ></img>
                        <div className="uye_bilgi">
                                <p className="uye_ad" >HASAN PİLAVCI</p>
                                <p className="uye_gorev">Avukat</p>
                                <p className="uye_meslek">Avukat</p>
                        </div>
                    </div>
                </div>

                
                
                
            </div>
            
        </div>
    )
}