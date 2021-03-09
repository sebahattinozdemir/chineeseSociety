import "./İkametCalısmaİzni.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function İkametCalısmaİzni() {
    return (
        <div>
             <Header
                
                title="İkamet Çalısma İzni"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem",minHeight:"30rem"}}>
            

              <div>
                  <ul>
                      <li>
                      <a className="ikametlink" href="https://e-ikamet.goc.gov.tr/" target="_blank">İkamet İzni için linke tıklayarak bilgi alabilirsiniz.</a>
                      </li>
                      <br/>
                      <li>
                      <a className="calismalink" href="https://www.goc.gov.tr/calisma-izni-sss" target="_blank">Çalışma İzni için linke tıklayarak bilgi alabilirsiniz.</a>
                      </li>
                      <br/>
                      <li className="calismalink" >Göçmenlik avukatları göçmenlik prosedürlerini profesyonelce ele alır ve oturma izinlerini yönetir.</li>
                      <li className="calismalink">Taşınır ve gayrimenkul alımları profesyonel avukatlar tarafından yapılır.</li>
                      <li className="calismalink">Çalışma ve oturma izinleri profesyonel avukatlar tarafından ele alınır.</li>
                      <li className="calismalink">Sigorta, bir sigorta avukatı tarafından yapılır.</li>

                  </ul>
                
                
                
              </div>
       
                
                
            </div>
        </div>
    )
}
