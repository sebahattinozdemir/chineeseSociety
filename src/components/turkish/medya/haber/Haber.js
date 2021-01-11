import "./Haber.css";
import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from 'react'

export default function Haber() {
    return (
        <div>
             <Header
                
                title="Haber"
                icon={<AssignmentIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
              <h3>Haber sayfasıdır</h3>
                
                
            </div>
        </div>
    )
}
