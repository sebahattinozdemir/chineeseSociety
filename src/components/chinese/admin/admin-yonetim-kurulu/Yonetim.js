import React, { useState, useEffect } from "react";
import "./Yonetim.css";
import Table from "./table/Table";
import { useSnackbar } from 'notistack';

//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('managementMember')

const Yonetim = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [uyeler, setUyeler] = useState(GenericService._get.data);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    getManagementMembers()
  }, []);

  const getManagementMembers = () => {
    GenericService.get()
      .then(async (data) => {
        setUyeler(
          data.map((member) => ({
            id: member._id,
            url: member.photoUrl,
            name: member.nameAndSurname,
            position: member.position,
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }

  const addUye = (event) => {
    event.preventDefault();
    GenericService.save({
      photoUrl: url,
      nameAndSurname: name,
      position: position,
    }).then((data) => {
      enqueueSnackbar('Yönetim kurulu üyesi eklendi.', {
        autoHideDuration: 3000,
        variant: 'success'
      });
    }).catch((err) => {
      console.log(`Oppss ! ${err}`)
    })

    getManagementMembers()
    setName("");
    setPosition("");
    setUrl("");
  };

  return (
    <div
      className="referanslar"
      style={{ border: "2px solid transparent" }}
    >
      <h1 style={{ textAlign: "center", color: "black" }}>
        Yonetim Kurulu Sayfasi Guncelleme
      </h1>

      <div className="container-fluid">
        <h2 style={{ color: "black" }}>Uye Ekle</h2>
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
            <label for="exampleFormControlInput1">Uye Pozisyonu</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Dernek Baskani"
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

        <h2 style={{ color: "black" }}>Uyeyi Sil</h2>
        <table class="table" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Uye Adi </th>
              <th scope="col">Uye Pozisyonu </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>
          {uyeler.map((uye, index) => (
            <Table key={uye.id} uye={uye} index={index} getMembers={getManagementMembers} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Yonetim;
