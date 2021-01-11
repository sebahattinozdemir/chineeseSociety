import "./UyelerinHukukiHizmetleri.css";
import Header from "../../header/Header";
import GavelIcon from "@material-ui/icons/Gavel";
import React from 'react'

export default function UyelerinHukukiHizmetleri() {
    return (
        <div>
             <Header
                
                title="Üyelerin Hukuki Hizmetleri"
                icon={<GavelIcon style={{fontSize: "x-large"}}/>}
                
            />
            <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
                <div className="col-12 uyelerinhizmetleri" style={{padding:"2rem",fontSize:"medium"}}>
                        <p style={{textAlign:"justify"}}><b>机构奉行原则 : </b>协会全体成员利用精准专业更快更好为中国公民和中国企业服务，全力保障中国公民和中国企业的合法权益和利益不受非法侵犯</p>
                        <p style={{textAlign:"justify"}}><b>机构奉行信条 : </b>为国家尽忠，为人民服务</p>
                        <p style={{textAlign:"justify"}}><b>机构服务理念 : </b>吾之荣誉既忠诚</p>
                        <p style={{textAlign:"justify"}}><b>机构性质 : </b>非政府性官方民间组织</p>
                        <p style={{textAlign:"justify"}}><b>机构会员从事服务项目 : </b>对海外公民和企业的海外安全支持及预警；
                        最大限度保障中国海外公民和企业的合法利益和安全，在国家宣布紧急状态下，协助相关机构做好应对紧急事态的华人、
                        华企人身安全和紧急状态下事故处理及相关措施和法律保障；协助相关部门与土耳其相关司法部门进行协调和沟通；翻译；法律咨询；
                        企业法律知识代培训；案件调查、研判；诉讼；与案件当地各级执法部门和相关司法部门建立联系和沟通；代表华人和华企向相关司法部门申请督办；
                        确认相关司法文件；接受中国公民、中国企业报案和在维权过程中的诉讼援助和指导；对案件调查、督办、落实以保障中国公民和中国企业合法权益依法落实、
                        对违法犯罪行为依法惩处；协助中国企业间的法律事务的调解；协助中国公民间法律事务调解；等相关一切与司法和法律相关工作。
                        协会会计师协助中国公民及中国公司成立土耳其公司注册、税务登记、报税等解决相关财务问题</p>
      
                        


                        
       
                </div>
            </div>
        </div>
    )
}
