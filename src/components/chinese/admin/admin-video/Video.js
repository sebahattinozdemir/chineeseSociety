import React, { useState, useEffect } from "react";
import "./Video.css";
import Table from "./table/Table";
import db from "../../../../firebase";
import firebase from "firebase";
import { useSnackbar } from 'notistack';


//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('video', 'ch')

function Photo() {
  const { enqueueSnackbar } = useSnackbar();
  const [urls, setUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // fires once when the app loads
    getVideos();
  }, []);

  const getVideos = () => {
    GenericService.get()
      .then(async (data) => {
        setUrls(
          data.map((video) => ({
            id: video._id,
            url: video.videoUrl,
            name: video.videoName
          }))
        );
      })
      .catch((err) => {
        console.log(`Oppss ! ${err}`)
      })
  }


  const addVideo = (event) => {
    event.preventDefault();
    GenericService.save({
      videoUrl: url,
      videoName: name,
      language: 'ch'
    }).then((data) => {
      enqueueSnackbar('Video eklendi.', {
        autoHideDuration: 3000,
        variant: 'success'
      });
      getVideos();
      setUrl("");
      setName("");
    }).catch((err) => {
      enqueueSnackbar('Video eklenemedi.', {
        autoHideDuration: 3000,
        variant: 'error'
      });
    })
  };

  return (
    <div
      className="referanslar"
      style={{ height: "100%", border: "2px solid transparent" }}
    >
      <h1 style={{ textAlign: "center", color: "black" }}>
        Galeri Video Ekleme Sayafasi
      </h1>

      <div className="container-fluid">
        <h2 style={{ color: "black" }}>Video Ekle</h2>
        <form style={{ color: "black" }}>
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

        <h2 style={{ color: "black" }}>Video Sil</h2>
        <table class="table" style={{ color: "black" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Video Adi </th>
              <th scope="col">Sil</th>
              <th scope="col">Guncelle</th>
            </tr>
          </thead>

          {urls.map((video, index) => (
            <Table key={video.id} video={video} index={index} getVideos={getVideos} />
          ))}
        </table>
      </div>
    </div>
  );
}

export default Photo;
