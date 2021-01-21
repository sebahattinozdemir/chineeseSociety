import Header from "../../header/Header";
import BusinessIcon from '@material-ui/icons/Business';
import React from "react";
import "../../../turkish/kurumsal/baskan-mesaji/Baskan.css";




function Baskan() {

    return (
        <div >
            <Header
               
                title="会长致辞"
                icon={<BusinessIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{}}>
            <div className="col-12" style={{padding:"2rem"}}>
      <p style={{textAlign:"center",fontSize:"x-large"}}>{""}<b>协会会长致辞</b></p>
      <br/>
        <p className="card-basic" style={{fontSize:"large"}}>
          {" "}
          “中国公民和中国公司法律权益保护和援助协会”是经过土耳其政府内政部，土耳其安卡拉省政府人员审核批准由多名专业律师和知名律师组织成立的合法法律专业协会，系非政府性官方组织。本协会成立初衷是为了在中华人民共和国驻土耳其共和国大使馆、总领事馆指导下下，在土耳其共和国域内更权威、更专业、更便捷、更全面为在土耳其共和国域内生活、居住、旅游、正常交往和工作的中国公民和中国公司（企业）以及和土耳其有关联的中国公司（企业）和中国公民提供更好的专业性法律保障和法律救援服务工作，更好地保护涉外中国公民和公司（企业）合法权益不受非法侵犯。协会及协会律师服务领域包括但不限于：法律咨询；法律顾问；案件调查；司法建议；法庭诉讼；反诉；调解；执行；查封；代为与各司法机构协调和沟通；中国公民之间和中国公司（企业）之间矛盾的调解；等一切与法律相关联的司法活动。我们协会全体会员将秉承“法律至上”、“公平公正原则之至上”、“当事人至上”原则和严格恪守律师职业道德和当事人保密原则，以维护社会“公序良俗”为己任，努力实现当事人合法权益的有效保护。我们协会全体会员的人格理念即“吾之荣誉既忠诚”.
</p>
      <br/>
      <br/>
        <p style={{textAlign:"right",fontSize:"x-large"}}>{""}<b>愿和平、正义、公平、法制、人道之光普照大地</b></p> 
        
        <br />
       
      </div>
                
                
            </div>
            
        </div>
    )
}

export default Baskan;
