import "./Duyuru.css";
import Sertifika from "../../../turkish/medya/duyuru/sertifika.jpg";
import c1 from "../../../turkish/medya/duyuru/duyururepo/cin1.jpg";
import c2 from "../../../turkish/medya/duyuru/duyururepo/cin2.jpg";
import c3 from "../../../turkish/medya/duyuru/duyururepo/cin3.jpg";
import c4 from "../../../turkish/medya/duyuru/duyururepo/cin4.jpg";
import Header from "../../header/Header";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from 'react'

export default function Duyuru() {
    return (
        <div>
             <Header
                
                title="公告"
                icon={<AssignmentIcon style={{fontSize: "x-large"}}/>}
                
            />
                <div className="row" style={{paddingTop: "2rem", minHeight:"30rem",marginBottom:"2rem"}}>
          

                

          <div className="col-12 giristablo" style={{marginBottom:"2rem"}}>
              <img className="sertifikaimg " src={Sertifika} style={{width:"60%",height:"40rem",margin:"auto",display:"block",align:"center"}}></img>
          </div>

          <br/>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                <img src={c1} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                  <h4 style={{fontWeight:"bold"}}>退订</h4>
                  <p style={{padding:"1%",textAlign:"justify"}}>每个成员都有离开协会的权利，但要以书面形式通知。 一旦成员的辞职请愿书到达董事会，退出程序即视为已完成。
                   退出会员并不会结束会员对协会的累积债务。
                  </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                <img src={c2} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                  <h4 style={{fontWeight:"bold"}}>通话程序</h4>
                  <p style={{padding:"1%",textAlign:"justify"}}>董事会根据协会章程安排有权参加大会的会员名单。 有权提前至少十五天出席大会的会员，
                  可以在至少一张报纸或协会的网站上宣布会议的日期，时间，地点和议程，并得到书面通知，向会员的电子邮件地址或联系方式或本地广播发送消息的权利。 
                  邀请使用他们的工具参加会议。
                  </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                <img src={c3} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                  <h4 style={{fontWeight:"bold"}}>登记程序</h4>
                  <p style={{padding:"1%",textAlign:"justify"}}>协会的帐簿和记录按照协会条例中规定的原则和程序进行保存。
                  </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 duyuruholder" style={{float:"left",paddingTop:"1%",backgroundColor:"#FFFDF9",height:"auto"}}>
                <img src={c4} className="card" alt="..." style={{width:"100%", height:"25rem",padding:"1%",borderRadius:"1rem"}}></img>
                  <h4 style={{fontWeight:"bold"}}>批准书</h4>
                  <p style={{padding:"1%",textAlign:"justify"}}>开始使用前，必须保存在协会中的书籍（大书除外）由省协会理事会或公证人认证。 
                  这些书将继续使用，直到其页面完成并且未获得中间批准。 但是，必须在使用该资产的年度的前一个月的每年的最后一个月，
                  对资产负债表上的每日日记进行重新认证.
                  </p>
          </div>
          
      </div>
        </div>
    )
}
