import "./Duyuru.css";
import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from 'react'

export default function Duyuru() {
    return (
        <div>
             <Header
                
                title="公告"
                icon={<AssignmentIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
              <h3>Duyuru sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
