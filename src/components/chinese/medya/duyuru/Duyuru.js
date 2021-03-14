import "./Duyuru.css";
import Sertifika from "./sertifika.jpg";
import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useEffect, useState } from "react";
import db from "./../../../../firebase";
import html from 'react-inner-html';
//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('announcement','ch')


export default function Duyuru() {
  const [duyurular, setDuyurular] = useState([]);

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = () => {
    GenericService.get()
      .then(async (data) => {
        setDuyurular(
          data.map((announcement) => ({
            id: announcement._id,
            url:announcement.photoUrl.replace("?dl=0","?raw=1"),
            baslik: announcement.title,
            duyuruContent: announcement.content,

        
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
        title="公告"
        icon={<AssignmentIcon style={{ fontSize: "x-large" }} />}
      />
      <div
        className="row"
        style={{ paddingTop: "2rem", minHeight: "30rem", marginBottom: "2rem" }}
      >
        <div className="col-12 giristablo" style={{ marginBottom: "2rem" }}>
          <img
            className="sertifikaimg "
            src={Sertifika}
            style={{
              width: "60%",
              height: "40rem",
              margin: "auto",
              display: "block",
              align: "center",
            }}
          ></img>
        </div>

        <br />

        {duyurular.map((duyuru, index) => (
            <div key = {duyuru.id}
                className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder"
                style={{
                  float: "left",
                  paddingTop: "1%",
                  backgroundColor: "#FFFDF9",
                  height: "auto",
                  }}
            >
            <img
              src={duyuru.url}
              className="card"
              alt="..."
              style={{
                width: "100%",
                height: "25rem",
                padding: "1%",
                borderRadius: "1rem",
              }}
            ></img>

            <h4 style={{ fontWeight: "bold" }}>{duyuru.baslik}</h4>
            <p style={{ padding: "1%", textAlign: "justify" }} {...html(duyuru.duyuruContent)}>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
