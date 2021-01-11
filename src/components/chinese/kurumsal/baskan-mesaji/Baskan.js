import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from "react";
import "./Baskan.css";



function Baskan() {

    return (
        <div >
            <Header
               
                title="会长致辞"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
            <div className="col-12" style={{padding:"2rem"}}>
      <h4 style={{textAlign:"center"}}>{""}<b>协会会长致辞</b></h4>
      <br/>
        <p className="card-basic">
          {" "}
          "土耳其共和国内政部和安卡拉州长批准后，由“中国公民和中国公司的合法权益保护和慈善协会”组成的团体是由专业律师和著名律师成立的法律预言症协会和非政府组织。该协会，中国大陆大使馆和土耳其共和国领导人总领事馆的主要目标是短期或长期在土中居住，这使得经常与土耳其人与其竞争对手和土耳其一起工作的人，中国退伍军人和企业来精通土耳其共和国领土（商务）是为了保护他们的合法权益，并以专业，正确和全面的方式提供法律援助。通过提供更好的保护，防止非法侵犯中国公民和公司（企业）的合法权益。协会律师的服务范围包括但不限于：法律咨询；案件审查，法律咨询；要起诉;反诉调解行政人员;发作;与各司法机构的协调与沟通；调解中国公民与中国公司（企业）之间的矛盾和所有法律活动。我们协会的所有成员将保护“法律至上”，“公正审判和司法”，“代理优先”原则，并严格遵守律师的职业道德原则和当事方保密原则，他们将保护社会公共秩序和习俗作为自己的责任和试图确保其合法权益得到有效保护。我们协会所有成员的人格理念“我的荣誉是忠诚”。
愿和平，正义，正义，法治和人类的光辉在地球上闪耀。</p>
      <br/>
      <br/>
        <p style={{textAlign:"right",fontSize:"medium"}}>{""}<b>协会会长/首席执行官</b></p>
        
        <br />
       
      </div>
                
                
            </div>
            
        </div>
    )
}

export default Baskan;
