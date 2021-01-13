import "./Home.css";
import homepic from "../../turkish/home-page/dernekhomepic.jpg";
import investment from "../../turkish/home-page/investment.jpg";
import education from "../../turkish/home-page/education.jpg";
import life from "../../turkish/home-page/life.jpg";
import health from "../../turkish/home-page/health.jpg";
import Mail from "../contact-page/mail/Mail";
import Belgeler from "../../turkish/home-page/belgeler/Belge";
import Slider from "../../turkish/home-page/slider/Slider";
import Investment from "../investment/Investment";
import React, { useEffect } from 'react';



function Home() {


  return (
    <div className="row">
      
      <div className="col-12 home" style={{padding:"1rem"}}>

          <Slider/>
          
          
          
      </div>

      <div className="col-12 giristablo">
                <img className="girisresmi " src={homepic} style={{width:"60%",height:"40rem",margin:"auto",display:"block",align:"center"}}></img>
      </div>

      <div className="col-12 belge" style={{marginTop:"1rem",marginBottom:"2rem"}}>
            <Belgeler/>
      </div>
        
      <div className="col-12 invest" style={{marginTop:"1rem"}}>
            <Investment
                Iphoto={investment}
                Ititle="在土耳其的投资"
                Iuzanti="/chi-turkiyede-yatirim"
                Iexplain="到2017年，土耳其是世界上增长第二快的国家，在土耳其，一切都是投资工具，我们在此教书以及如何进行投资。"
            />
            <Investment
                Iphoto={life}
                Ititle="在土耳其生活"
                Iuzanti="/chi-turkiyede-yasam"
                Iexplain="您应该如何在土耳其过上和平的生活，您做客的国家的传统和习俗是什么，土耳其人不喜欢我们准备的分配床头指南的东西。"
            />
            <Investment
                Iphoto={health}
                Ititle="土耳其的健康"
                Iuzanti="/chi-turkiyede-saglik"
                Iexplain="地理上最大的城市医院，私家医院并在世界各地享有盛誉，在这里写下了您需要了解的有关土耳其合格医生的保健和治疗方面的所有信息。"
            />
            <Investment
                Iphoto={education}
                Ititle="土耳其的教育"
                Iuzanti="/chi-turkiyede-egitim"
                Iexplain="这是外国学生的天堂，他们将接受土耳其学校的培训，包括入学阶段，学生居留证，毕业后如何以详细的教学方式找工作。"
            />
        </div>
            
            <Mail/>

            <div className="col-12 harita" style={{}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.593095300537!2d32.85717809978627!3d39.890760560175714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8255924da3%3A0x21e8de7da6a71210!2s%C3%87ankaya%2C%20Cinnah%20Cd.%2067-69%2C%2006690%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1609827468241!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 

            
          
            

            

            
            
    </div>
  );
}

export default Home;

