import './Slider.css';
import Sl2 from "./sl2.jpg";
import Sl3 from "./sl3.jpg";
import Sl5 from "./sl5.jpg";
import Sl6 from "./sl6.jpg";
import Slt1 from "./slt1.jpg";
import Slt2 from "./slt2.jpg";
import Slt3 from "./slt3.jpg";
import Slt4 from "./slt4.jpg";
import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
        
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="slide" >
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="2000">
                            <img src={Sl6} className="d-block img-responsive w-100 dahili" title="adli sicil" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={Sl2} className="d-block img-responsive w-100 dahili" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        <div className="carousel-item">
                            <img src={Sl3} className="d-block img-responsive w-100 dahili" title="adli sicil" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        <div className="carousel-item">
                            <img src={Sl5} className="d-block img-responsive w-100 dahili" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        
                        <div className="carousel-item">
                            <img src={Slt1} className="d-block img-responsive w-100 dahili" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        <div className="carousel-item">
                            <img src={Slt2} className="d-block img-responsive w-100" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        <div className="carousel-item">
                            <img src={Slt3} className="d-block img-responsive w-100 dahili" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        <div className="carousel-item">
                            <img src={Slt4} className="d-block img-responsive w-100 dahili" title="sabıka kaydı" alt="logo" style={{height:"30rem"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}></h4>
                        </div>
                        
                        
                         
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
            
        
           
        )
    }
}
