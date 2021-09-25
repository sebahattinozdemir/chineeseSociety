import "./OzelDurumlardaHukukiYardım.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function OzelDurumlardaHukukiYardım() {
    return (
        <div>
             <Header
                
                title="Özel Durumlarda Hukuki Yardım"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
             <div className="col-12 ozeldurumlar" style={{padding:"2rem",fontSize:"medium"}}>
                  <ul>
                        <li>Ağır ceza davası</li>
                        <li>Cezaevi görüşü (Acil durumda)</li>
                        <li>Gözaltı merkezi görüşü  (Acil durumda)</li>
                        <li>Savcılık görüşme (Acil durumda)</li>
                        <li>Karakol ifade tutanağı (Acil durumda)</li>
                        <li>İfade tutanağı</li>
                        <li>Dosya inceleme tutanağı</li>
                        <li>Hastane acil durum görüş ve delil toplama</li>
                        <li>Olay yeri inceleme</li>
                        <li>Sınır dışı ve iade </li>
                        <li>Önemli toplantı görüşmeleri ve raporlama  </li>
                        <li>Olay hukuki keşif ,inceleme</li>
                        <li>Delilin emanete alınması </li>
                        <li>Diğer hukuki hizmetler</li>
                        <li>Xinjiang işleri birimi belgesi “ ispat mektubu “ 
Ücret ( kapsamı: avukat denetim ücreti , Türkiye adalet Bakanlığı belgesi çeviri tercüme noter ve apostil onayları ve diğer tüm masraflar ) 300 usd</li>

                  </ul>
             </div>
         </div>
        </div>
    )
}
