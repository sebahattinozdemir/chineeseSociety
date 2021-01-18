import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const yonetim = () => {
    document.getElementById("yonetim").style.display = "block";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
  };

  const uye = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "block";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
  };

  const haber = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "block";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
  };

  const blog = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "block";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
  };

  const duyuru = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "block";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "none";
  };

  const foto = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "block";
    document.getElementById("video").style.display = "none";
  };

  const video = () => {
    document.getElementById("yonetim").style.display = "none";
    document.getElementById("uyeler").style.display = "none";
    document.getElementById("haber").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("duyuru").style.display = "none";
    document.getElementById("photo").style.display = "none";
    document.getElementById("video").style.display = "block";
  };

  return (
    <div>
      <div className="row">

        <h3 style={{ textAlign: "center", color: "black" }}>SITE ISLEMLERI</h3>

        <button
          className="btn btn-outline"
          onClick={yonetim}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Yonetim Kurulu Uyeleri
        </button>

        <button
          className="btn btn-outline"
          onClick={uye}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Uyelerimiz
        </button>

        <button
          className="btn btn-outline"
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
          onClick={haber}
        >
          Haber
        </button>

        <button
          className="btn btn-outline"
          onClick={blog}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Blog
        </button>
        <button
          className="btn btn-outline"
          onClick={duyuru}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Duyuru
        </button>

        <button
          className="btn btn-outline"
          onClick={foto}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Fotograflar
        </button>

        <button
          className="btn btn-outline"
          onClick={video}
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "16px",
            display: "block",
            width: "100%",
          }}
        >
          Videolar
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
