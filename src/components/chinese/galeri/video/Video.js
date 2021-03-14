import "./Video.css";
import Header from "../../header/Header";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
//stores
import GenericStore from "../../../../stores/GenericStore";
const GenericService = new GenericStore('video', 'ch')

export default function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
  }, []); 

  const getVideos = () => {
    GenericService.get()
      .then(async (data) => {
        setVideos(
          data.map((video) => ({
            id: video._id,
            url: video.videoUrl.replace('?dl=0', '?raw=1'),
            name: video.videoName
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
        title="视频"
        icon={<CameraAltIcon style={{ fontSize: "x-large" }} />}
      />
      <div className="row" style={{ paddingTop: "2rem" }}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="col-lg-3 col-md-6 col-sm-6 col-12 video-wrapper"
            style={{}}
          >
            <ReactPlayer
              className="react-player"
              style={{ margin: "auto", overFlow: "hidden" }}
              url={video.url}
              controls={true}
              width="35rem"
              height="20rem"
            />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
