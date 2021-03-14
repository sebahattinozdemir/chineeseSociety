import "./Fotograf.css";
import Header from "../../header/Header";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import React, { useEffect, useState } from "react";


//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('gallery', 'tr')

export default function Fotograf() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos()
  }, []);


  const getPhotos = () => {
    GenericService.get()
      .then(async (data) => {
        setPhotos(
          data.map((gallery) => ({
            id: gallery._id,
            url: gallery.photoUrl.replace('?dl=0', '?raw=1'),
            name: gallery.photoName
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }
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
