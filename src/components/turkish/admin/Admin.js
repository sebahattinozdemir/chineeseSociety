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
  },[]);


  return (
    <div className="row admin-ana" style={{ color: "black", marginTop: "1rem" }}>
    
  
      <div className="login" id='login'>
            <Login/>
      </div>
      
      <div className="admin" id="admin">
        
        <div className="admin-sidebar" style={{ width: "15%", height: "100vh", marginTop:"0px",}}>
            <Sidebar/>
        </div>
       
        <div  className="admin-content" style={{ width: "85%", height: "100vh" }}>


        <div id="yonetim" style={{ width: "100%", display: "none" }}>
                <Yonetim/>
        </div>
        
        <div id="uyeler" style={{ width: "100%", display: "none" }}>
            <Uyeler/>
        </div>

          <div id="haber" style={{ width: "100%", display: "none" }}>
                <Haber/>
          </div>

          <div id="blog" style={{ width: "100%", display: "none" }}>
            <Blog/>
          </div>

          <div id="duyuru" style={{ width: "100%", display: "none" }}>
            <Duyuru/>
          </div>

          <div id="photo" style={{ width: "100%", display: "none" }}>
            <Photo/>
          </div>

          <div id="video" style={{ width: "100%", display: "none" }}>
            <Video/>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Admin;
