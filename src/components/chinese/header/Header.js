import "./Header.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const {title,icon}=this.props;
    return (
        <div class="row gri" style={{ marginLeft:"-3rem",marginRight:"-3rem",marginTop:"-2rem"}} >
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

