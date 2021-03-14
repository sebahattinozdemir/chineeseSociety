import React, { useState, useEffect } from "react";
import "./Photo.css";
import Table from "./table/Table";
import db from "../../../../firebase";
import firebase from "firebase";
import { useSnackbar } from 'notistack';


//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('gallery')

function Photo() {
  const { enqueueSnackbar } = useSnackbar();
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    // fires once when the app loads
    getPhotos();
  }, []);

  //
  const getPhotos = () => {
    GenericService.get()
      .then(async (data) => {
        setUrls(
          data.map((gallery) => ({
            id: gallery._id,
            url: gallery.photoUrl,
            name: gallery.photoName,
           
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }


  const addPhoto = (event) => {
    event.preventDefault();
    GenericService.save({
      photoUrl: url,
      photoName: name,
      
    }).then((data) => {
      enqueueSnackbar('Fotoğraf eklendi.', {
        autoHideDuration: 3000,
        variant: 'success'
      });
    }).catch((err) => {
      enqueueSnackbar('Fotoğraf eklenemedi.', {
        autoHideDuration: 3000,
        variant: 'error'
      });
    })
    getPhotos();
    setUrl("");
    setName("");
    
  };
    

  return (
    <div
      className="referanslar"
      style={{ height: "100%", border: "2px solid transparent" }}
    >
      <h1 style={{ textAlign: "center", color: "black" }}>
         Galeri Foto Ekleme Sayafasi
      </h1>

      <div className="container-fluid">
        <h2 style={{ color: "black" }}>Foto Ekle</h2>
        <form style={{ color: "black" }}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Foto Url</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="url"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Fotograf Ismi</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="isim"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary" onClick={addPhoto}>
            Foto Ekle
          </button>
        </form>

        <h2 style={{ color: "black" }}>Fotoyu Sil</h2>
        <table class="table" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Uye Adi </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {urls.map((photo, index) => (
            <Table key={photo.id} photo={photo} index={index} getPhotos={getPhotos}/>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Photo;
