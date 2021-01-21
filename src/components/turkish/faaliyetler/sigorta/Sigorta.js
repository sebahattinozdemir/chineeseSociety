import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function Sigorta() {
    return (
        <div>
             <Header
                
                title="Sigorta"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
             <div className="col-12 hukukiyardım" style={{padding:"2rem",fontSize:"medium"}}>
                 <ul>
                         <li>Aile Sigortası</li>
                         <li>Sağlık Sigortası</li>
                         <li>Seyahat Sigortası</li>
                         <li>Havacılık Sigortası</li>

                         



                 </ul>
             </div>

            </div>

</div>
       
    )
}
