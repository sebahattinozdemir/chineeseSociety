import "./Fotograf.css";
import Header from "../../header/Header";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import React, { useEffect, useState } from "react";
import db from "./../../../../firebase";


export default function Fotograf() {

  const [photos, setPhotos] = useState([]);
  

  useEffect(() => {
    // fires once when the app loads
    db.collection("photos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPhotos(
          snapshot.docs.map((doc) => ({
            id:       doc.id,
            url:      doc.data().url,
          }))
        );
      });
  }, []);
  return (
    <div>
      <Header
        title="Fotograf"
        icon={<CameraAltIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem" }}>
        
      {photos.map((photo, index) => (
          
            <div key={photo.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            style={{ marginBottom: "2rem" }}
          >
            <img
              src={photo.url}
              className="foto_card"
              alt="Türk-Çin Derneği"
            ></img>
          </div>
  
       ))}

        
        
        
        
        
        
        
        
      </div>
    </div>
  );
}
