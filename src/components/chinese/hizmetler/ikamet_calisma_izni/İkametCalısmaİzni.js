import "./İkametCalısmaİzni.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function İkametCalısmaİzni() {
    return (
        <div>
             <Header
                
                title="居住证和工作许可证"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop:"2rem",minHeight:"30rem"}}>
            

              <div>
                  <ul>
                      <li>
                      <a className="ikametlink" href="https://e-ikamet.goc.gov.tr/" target="_blank">您可以通过点击链接居留许可获取信息</a>
                      </li>
                      <br/>
                      <li>
                      <a className="calismalink" href="https://www.goc.gov.tr/calisma-izni-sss" target="_blank">您可以通过单击工作许可证的链接来获取信息</a>
                      </li>
                      <br/>
                      <li>由移民律师专业代办移民手续和办理居住许可</li>
                      <li>由专业律师代办动产和不动产房产购买</li>
                      <li>由专业律师代办工作和居住许可</li>
                      <li>由保险律师代办保险</li>

                      

                  </ul>
                
                
                
              </div>
       
                
                
            </div>
        </div>
    )
}
