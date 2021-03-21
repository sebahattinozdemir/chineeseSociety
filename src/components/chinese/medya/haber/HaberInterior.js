import React from "react";
import { Link } from "react-router-dom";
import "./Haber.css";
import html from 'react-inner-html';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


function HaberInterior(props) {
  return (
      <div
        className="col-lg-3 col-md-6 col-sm-6 col-12"
        style={{ padding:"1%" }}
      >
        <img  style={{ padding:"1%",border: "1px #A4203A solid", borderRadius:"1rem",height:"25rem"}}
          src={props.photo}
          className="w-100"
          alt="..."
        ></img>
      
      <div style={{margin:"0%",  width:"100%",textOverflow:"clip", display:"block"}}>

        <a href={props.haberUrl} target="_blank" style={{textDecoration:"none",color:"#A4203A"}}> 
             <h4 style={{fontWeight:"bold"}}>{ReactHtmlParser(props.title) } </h4>
        </a>  
      
        <a style={{textAlign:"justify"}}>{ReactHtmlParser(props.content) }</a>

      </div>
      </div>
    
  );
}

export default HaberInterior;
