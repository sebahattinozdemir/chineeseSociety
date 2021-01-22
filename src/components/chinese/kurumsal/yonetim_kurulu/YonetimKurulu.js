import "../../../turkish/kurumsal/yonetim_kurulu/YonetimKurulu.css";
import u1 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u1.jpg";
import u2 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u2.jpg";
import u7 from "../../../turkish/kurumsal/uyelerimiz/uyeler/u7.jpg";
import Header from "../../header/Header";
import BusinessIcon from "@material-ui/icons/Business";
import React, { useEffect, useState } from "react";
import db from "./../../../../firebase";

export default function YonetimKurulu() {
  const [uyeler, setUyeler] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    db.collection("chi-uyeler")
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) => {
        setUyeler(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url:
              "https://drive.google.com/uc?export=view&id=" +
              doc
                .data()
                .url.substring(
                  doc.data().url.lastIndexOf("file") + 7,
                  doc.data().url.lastIndexOf("/")
                ),
            name: doc.data().name,
            position: doc.data().position,
          }))
        );
      });
  }, []);

  return (
    <div>
      <Header
        title="管理委员会"
        icon={<BusinessIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem", minHeight: "30rem" }}>
    
        {uyeler.map((uye, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2">
            <div className="uye_cerceve">
              <img
                src={uye.url}
                className="uye_card"
                alt="Türk-Çin Derneği Üyeleri"
              ></img>
              <div className="uye_bilgi">
                <p className="uye_ad">{uye.name}</p>
                <p className="uye_gorev">{uye.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
