import "./Video.css";
import Header from "../../header/Header";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ReactPlayer from "react-player";
import React from 'react';
import TurkCin from "../../../turkish/galeri/fotograf/fotoRepo/TurkCin.mp4";
import Manastır from "../../../turkish/galeri/fotograf/fotoRepo/manastır.mp4";

export default function Video() {
    return (
        <div>
             <Header
                
                title="视频"
                icon={<CameraAltIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem"}}>
              

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 video-wrapper" style={{marginBottom:"1rem"}}> 
                <ReactPlayer className="react-player" style={{margin:"auto",overFlow:"hidden"}}
                   url={TurkCin} controls = {true} width='40rem' height='20rem'/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 video-wrapper" style={{marginBottom:"1rem"}}> 
                <ReactPlayer className="react-player" style={{margin:"auto",overFlow:"hidden"}}
                   url={Manastır} controls = {true} width='40rem' height='20rem'/>
            </div>
            
                
                
            </div>
        </div>
    )
}
