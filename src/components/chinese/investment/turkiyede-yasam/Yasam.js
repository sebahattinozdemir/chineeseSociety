import React from 'react';
import "../../../turkish/investment/turkiyede-egitim/Egitim.css";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Header from "../../header/Header"; 

export default function Yasam() {
    return (
        <div>
           <Header
              
                title="在土耳其生活"
                icon={<EmojiPeopleIcon style={{fontSize: "x-large"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                        <p class="card-text1">一个人打算永久居住的地方称为房屋。 每个人的地址都已注册到土耳其的强制性定居系统。 根据宪法，房屋是不可侵犯的，未经允许，任何人的房屋都不得进入。 那些受到国际保护和临时保护的人
由于其身份，他们只能居住在移民管理总局确定的省份内。 如果您不遵守此规则，则将严重限制您对提供给您的权利和服务的享受 </p>
                           
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> 搜索房租</h3>
                           <p class="card-text1">住在一个美丽而负担得起的家庭中，几乎是每个人的梦想，但要实现这个梦想需要大量的研究。 在研究之前，您必须确定要在家中搜索的条件。 不要忘记，您将要居住的房屋的位置和年代是决定租金价格的重要因素。 当您通过房地产经纪人租房时，必须向顾问支付服务费。 无论合同的期限如何，服务费都是从租户处一次性收取的，为一年租金的10％+增值税（18％）。 如果您通过互联网或街道搜索直接从业主那里租房子，则无需支付任何费用 </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> 买房子</h3>
                           <p class="card-text1">他们可以通过电子政务向劳工和社会保障部在线申请。如果使用其他方法或在土耳其的居留许可对外国人进行监视。工作的外国人必须在原籍国有官方居住地址。带有官方居住地址的国家/地区必须向相关的土耳其大使馆或领事馆提出申请。两种类型的应用程序都是在线为外国人在线制作的。为了在购买房屋时不被欺诈，应考虑所涉房屋的所有权及其抵押。您可以检查土地注册局和地籍局或土地注册局是否有任何限制。土耳其的不动产（房屋，土地，商店等）仅是在有关不动产的土地注册处进行的销售。与财产所有人就您要购买的房地产达成协议后，请向土地注册局申请出售</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><EmojiPeopleIcon style={{fontSize:"x-large",color:"black"}}/> 房客的权利和义务</h3>
                           <p class="card-text1" ></p>
                           <ul className="card-list">
                                <li>签订租赁协议后，房子就是您的私人空间。 未经您的允许，房东不能进入房屋。 但是，关于房屋的维护和保养，您可以在事先征得您同意的时间进入房屋</li>
                                <li>您有义务以购买房屋的方式交付房屋。</li>
                                <li>您离开家时，您的押金将交付给您。 但是，您对房屋造成的损失可能会从押金中扣除。 如果您的损失超过存款金额，您也有责任弥补损失的金额。</li>
                                <li>您必须在合同中规定的日期和表格上支付租金。</li>
                                <li>在没有合理理由的情况下，房东不能在租赁协议中将您逐出房屋。</li>

​
                        </ul>

                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
