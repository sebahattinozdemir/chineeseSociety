import React, { useState, useEffect } from "react";
import "./Video.css";
import Table from "./table/Table";
import db from "../../../../firebase";
import firebase from "firebase";

function Photo() {
  
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  
  useEffect(() => {
    // fires once when the app loads
    db.collection("videos")
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


  const addVideo = (event) => {
    event.preventDefault();
    db.collection("videos").add({
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
      style={{ height: "100vh", border: "2px solid transparent" }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
         Galeri Video Ekleme Sayafasi
      </h1>

      <div className="container">
        <h2 style={{ color: "white" }}>Video Ekle</h2>
        <form style={{ color: "white" }}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Video Url</label>
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
            <label for="exampleFormControlInput1">Video Ismi</label>
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

          <button className="btn btn-primary" onClick={addVideo}>
            Video Ekle
          </button>
        </form>

        <h2 style={{ color: "white" }}>Video Sil</h2>
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Video Adi </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {urls.map((video, index) => (
            <Table key={video.id} video={video} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Photo;
