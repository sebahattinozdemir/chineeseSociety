
import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function Sigorta() {
    return (
        <div>
             <Header
                
                title="保险   "
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
             <div className="col-12 hukukiyardım" style={{padding:"2rem",fontSize:"medium"}}>
                 <ul>
                         
                         <li>家庭险</li>
                         <li>医疗险</li>
                         <li>旅游险</li>
                         <li>航空险</li>

                         




                 </ul>
             </div>

            </div>


 </div>
    )
}
