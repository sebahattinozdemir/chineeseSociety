import React, { useState, useEffect } from "react";
import "./Duz-Uyeler.css";
import Table from "./table/Table";
import db from "../../../../firebase";
import firebase from "firebase";

function Uyeler() {
  
  const [uyeler, setUyeler] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [mission, setMission] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    // fires once when the app loads
    db.collection("duz-uyeler")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setUyeler(
          snapshot.docs.map((doc) => ({
            id:       doc.id,
            url:      doc.data().url,
            name:     doc.data().name,
            mission:doc.data().mission,
            position: doc.data().position,
          }))
        );
      });
  }, []);

  const addUye = (event) => {
    event.preventDefault();
    db.collection("duz-uyeler").add({
      url: url,
      name: name,
      mission: mission,
      position: position,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setPosition("");
    setMission("");
    setUrl("");
  };

  return (
    <div
      className="referanslar"
      style={{ height: "100vh", border: "2px solid transparent" }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>
        Uyeler Sayfasi Guncelleme
      </h1>

      <div className="container">
        <h2 style={{ color: "white" }}>Uye Ekle</h2>
        <form style={{ color: "white" }}>
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
            <label for="exampleFormControlInput1">Uye Ismi</label>
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

          <div class="form-group">
            <label for="exampleFormControlInput1">Uye Gorevi</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Dernek Baskani"
              value={mission}
              onChange={(event) => {
                setMission(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Uye Pozisyonu</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Avukat"
              value={position}
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary" onClick={addUye}>
            Uye Ekle
          </button>
        </form>

        <h2 style={{ color: "white" }}>Uyeyi Sil</h2>
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Uye Adi </th>
              <th scope="col">Gorev </th>
              <th scope="col">Poziyon </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {uyeler.map((uye, index) => (
            <Table key={uye.id} uye={uye} index={index} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Uyeler;
