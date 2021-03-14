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
        style={{ border: "1px #A4203A solid", borderRadius: "1em",margin:"1%" }}
      >
        <img
          src={props.photo}
          className="w-100"
          alt="..."
        ></img>
      
      <div style={{margin:"0%",padding:"1%"}}>
                <h4 className="blogtitle" {...html(props.title)}></h4>
                {ReactHtmlParser(props.content) }
      </div>
      </div>
    
  );
}

export default HaberInterior;
