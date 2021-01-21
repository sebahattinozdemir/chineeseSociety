import "./Video.css";
import Header from "../../header/Header";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import db from "./../../../../firebase";

export default function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    db.collection("videos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setVideos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().url,
          }))
        );
      });
  }, []);

  return (
    <div>
      <Header
        title="Video"
        icon={<CameraAltIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem" }}>
     
        {videos.map((video, index) => (
          <div key = {video.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12 video-wrapper"
            style={{  }}
          >
            <ReactPlayer
              className="react-player"
              style={{ margin: "auto", overFlow: "hidden" }}
              url={video.url}
              controls={true}
              width="40rem"
              height="20rem"
            />
            <br/>
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
}
