import React, { useEffect } from "react";
import "./Admin.css";
import Login from "./login/Login";
import Haber from "./admin-haber/Haberler";
import Yonetim from "./admin-yonetim-kurulu/Yonetim.js";
import Blog from "./admin-blog/Blog";
import Duyuru from "./admin-duyuru/Duyuru";
import Sidebar from "./admin-sidebar/Sidebar";
import Uyeler from "./admin-uyelerimiz/Duz-Uyeler";
import Photo from "./admin-foto/Photo";
import Video from "./admin-video/Video";

function Admin() {
  useEffect(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("admin").style.display = "none";
  }, []);

  return (
    <div className="container-fluid admin-ana" style={{ color: "black"}}>
      <div className="login" id="login">
        <Login />
      </div>

      <div className="row" id="admin">
        <div
          className="col-lg-3 col-md-4 col-xs-12 admin-sidebar"
          style={{height: "100%" }}
        >
          <Sidebar />
        </div>

        <div
          className="col-lg-9 col-md-8 col-xs-12 admin-content"
          style={{height: "100%" }}
        >
          <div id="yonetim" style={{display: "none" }}>
            <Yonetim />
          </div>

          <div id="uyeler" style={{display: "none" }}>
            <Uyeler />
          </div>

          <div id="haber" style={{display: "none" }}>
            <Haber />
          </div>

          <div id="blog" style={{display: "none" }}>
            <Blog />
          </div>

          <div id="duyuru" style={{display: "none" }}>
            <Duyuru />
          </div>

          <div id="photo" style={{display: "none" }}>
            <Photo />
          </div>

          <div id="video" style={{display: "none" }}>
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
