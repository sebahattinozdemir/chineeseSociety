
import Header from "../../header/Header";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react'

export default function Kesif() {
    return (
        <div>
             <Header
                
                title="案件调查"
                icon={<BusinessCenterIcon style={{fontSize: "x-large"}}/>}
                
            />
              <div className="row" style={{paddingTop: "2rem", minHeight:"30rem"}}>
             
            
             <div className="col-12 kesif" style={{padding:"2rem",fontSize:"medium"}}>
                <p style={{fontWeight:"bold",fontSize:"large"}}>根据多年来对中土双方企业贸易纠纷的处理过程中，大致的问题有以下方面：</p>
                <p style={{fontWeight:"bold",fontSize:"large"}}>中国方面;</p>
                <ol>
                    <li>均没有完整的产供销正规合同，以形式发票替代正规合同,</li>
                    <li>利用中国律师按照大陆法系原则签订英美法系合同，造成责权利脱节,</li>
                    <li>法制观念淡薄，不到万不得已不会积极维权，偏听偏信土耳其企业的还款承诺,</li>
                    <li>自我保护意识差，不会使用法律武器保护自己的合法权益,</li>
                    <li>遇事取巧不会老实按照法律程序办理和维权,</li>
                    <li>国际贸易规则不懂，很多贸易没有严格限定合同要约,</li>
                    <li>对贸易对象不了解，只顾眼前利益,</li>
                    <li>相互间恶意竞争造成对手有利可图,</li>
                    <li>过于轻信外国企业实力，合作前均没有做企业的信誉静止调查,</li>
                    <li>均没有按照国际贸易正规程序进行不可撤销信用证交割，为了企业利益最大化使用现金网络交易。</li>
                    <li>轻信长时间合作伙伴的经验主义。</li>

                </ol>
                <p style={{fontWeight:"bold",fontSize:"large"}}>土耳其方面;</p>
                <ol>
                    <li>针对中国企业问题有选择性的进行贸易款拖欠.</li>
                    <li>假冒中国企业伪造贸易贸易清关文件.</li>
                    <li>利用清关时效恶意违约.</li>
                    <li>利用形式发票漏洞对违约行为依法获得保护.</li>
                    <li>利用中国人重感情、重长时间合作的心里进行欺诈.</li>
                    <li>利用中国崇信洋人均富贵心里进行欺诈.</li>
                    <li>利用中国企业不会尽职调查进行夸大宣传进行欺诈.</li>
                    <li>不重契约精神，贸易往来以狡猾和不诚信处理两国间贸易。</li>
                    <li>利用中国企业间恶意竞争的方式进行敲诈.</li>
                    <li>利用中国企业只顾眼前利益而对贸易本金进行觊觎.</li>
                    <li>不重信誉，诚信，和长久往来；只重利益和既得利益.</li>
                    <li>恶意毁约，没有诚信意识.</li>
                    <li>善于利用中国企业和公民的善意思维和处理事务方法.</li>
                    <li>善于利用中国企业和公民的司法懒惰和得过且过心里.</li>
                    <li>善于利用中国企业和公民维权意识淡漠和不会计较过往的心里.</li>
                    <li>善于利用我国政府善意保护国外投资者的心里和政策</li>
                </ol>
                <p style={{fontWeight:"bold",fontSize:"large"}}>土耳其司法方面;</p>
                <ol>
                    <li>审理时间长</li>
                    <li>审理程序复杂</li>
                    <li>审理阶段证据收集费用昂贵</li>
                    <li>对方律师往往会采取拖延和延宕策略</li>
                    <li>对方当事人会利用司法漏洞进行资产转移</li>
                    <li>土耳其法庭存在一定程度的不正确自然正义保护习惯原则</li>
                    <li>英美法系和大陆法系的法根区别</li>
                    <li>我们企业提供证据的不合规造成的审理迟缓</li>
                </ol>
             </div>
         </div>
        </div>
    )
}
