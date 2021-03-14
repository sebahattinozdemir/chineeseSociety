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
                  <br/>
                  <br/>

                  <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>办理居住证所需要的文件 ( 旅游居住证 )</p>
                  <ul>
                    <li className="calismalink" >居住预约申请表</li>
                    <li className="calismalink" >保险 (160-235 TL)</li>
                    <li className="calismalink" >4 张证件照</li>
                    <li className="calismalink" >护照翻译件</li>
                    <li className="calismalink" >房租合同 (代办：2000TL \ 公证认证：500TL)</li>
                    <li className="calismalink" >授权委托书 （个人需办理）</li>
                    <li className="calismalink" >签证（如有电子签证需放入个人资料）（电子签证费用）</li>
                    <li className="calismalink" >费用（居住申请+居住证）</li>
                    <li className="calismalink" >总共：2500TL </li>
                    <li className="calismalink" >代办房租合同费用：4000TL</li>


                  </ul>
                  <br/>
                

                <ul>
                    <li className="calismalink" style={{listStyleType:"square"}}>代办房租合同、第一次申请居住证和延期居住证在公证处办理。延期居住证时需公证认证。 </li>
                    <li className="calismalink" style={{listStyleType:"square"}}>办理其他种类的居住证所需的证件会另外通知</li>
                    <li className="calismalink" style={{listStyleType:"square"}}>所有费用根据土耳其法律规定以即时通知确认为准</li>
                </ul>

                <br/>
                <br/>

                <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>工作签证</p>
                  <ul>
                    <li className="calismalink" >护照或旅行证件</li>
                    <li className="calismalink" >1 张证件照片</li>
                    <li className="calismalink" >劳动或服务合同</li>
                    <li className="calismalink" >无犯罪证明</li>
                    <li className="calismalink" >工作签证有效期最多90天。 必须在入境后30天内申报社会保障机构就业通知。  </li>
                    
                  </ul>

                  <br/>
                <br/>

                <p style={{fontSize:"large",fontWeight:"bold",color:"#A4203A"}}>工作许可</p>
                  <ul>
                    <li className="calismalink" >工作单位与外国人签订的劳动合同 </li>
                    <li className="calismalink" >护照复印件</li>
                    <li className="calismalink" >由宣誓的翻译人员或官方机构批准的带有土耳其语翻译的学位证书或临时毕业证书</li>
                    <li className="calismalink" >该单位的最新资本和股权结构显示的土耳其注册报</li>
                    <li className="calismalink" >税务局或者特许的会计师批准的最近一年的资产评估表和损益表   </li>
                    <li className="calismalink" >COVID-19 证明报告 </li>
                  </ul>
                
                
                
                
              </div>
       
                
                
            </div>
        </div>
    )
}
