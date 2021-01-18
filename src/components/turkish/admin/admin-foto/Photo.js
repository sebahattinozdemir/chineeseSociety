import React, { useState, useEffect } from "react";
import "./Photo.css";
import Table from "./table/Table";
import db from "../../../../firebase";
import firebase from "firebase";

function Photo() {
  
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    // fires once when the app loads
    db.collection("photos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setUrls(
          snapshot.docs.map((doc) => ({
            id:       doc.id,
            url:      doc.data().url,
            name:     doc.data().name,
          }))
        );
      });
  }, []);


  const addPhoto = (event) => {
    event.preventDefault();
    db.collection("photos").add({
      url: url,
      name: name,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setUrl("");
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
            <Table key={photo.id} photo={photo} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Photo;
