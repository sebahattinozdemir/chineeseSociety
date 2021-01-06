import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {title,icon}=this.props;
    return (
        <div class="row gri" style={{ backgroundColor: "#F2F2F2",paddingTop:"2rem",paddingLeft:"5rem",height:"8rem",marginTop:"21rem",marginLeft:"-3rem",marginRight:"-3rem"}}>
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

