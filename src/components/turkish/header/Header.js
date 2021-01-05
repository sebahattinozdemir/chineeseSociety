import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {subtitle,title,icon}=this.props;
    return (
        <div class="row" style={{ backgroundColor: "#F2F2F2",paddingTop:"3rem",paddingLeft:"5rem",height:"10rem",marginTop:"3rem",marginLeft:"-3rem",marginRight:"-3rem"}}>
          <div className="col-12">
          
                <p className="title"><b>
                    {icon}
                    &nbsp;
                    {title}</b></p>    
                      
          </div> 
        </div>
    

    
    )
    } 

}

