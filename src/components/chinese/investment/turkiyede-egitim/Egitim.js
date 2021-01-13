import React from 'react';
import "../../../turkish/investment/turkiyede-egitim/Egitim.css";
import SchoolIcon from '@material-ui/icons/School';
import Header from "../../header/Header"; 

export default function Egitim() {
    return (
        <div>
           <Header
              
                title="土耳其的教育"
                icon={<SchoolIcon style={{fontSize: "x-large"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                    <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                            <p class="card-text1">土耳其培训系统主要由两个主要部分组成，包括培训和正规教育。 正规教育; 学前教育，初等教育，中等教育和高等教育机构，非正规教育； 它涵盖与正规教育一起或在正规教育之外组织的所有教育活动。 教育机构向所有人开放，无论其语言，种族，性别或宗教信仰如何。 任何人，家庭，团体或班级都没有特权。
  在土耳其，必须具备在土耳其的义务教育才能享有教育权。 在宪法保障下，不得剥夺任何人在土耳其受教育的权利。 此外，公立学校免费提供教育。 妨碍一个人的受教育权是犯罪</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> 高等教育/大学</h3>
                            <p class="card-text1">高等教育机构大学，学院，学院，学院，音乐学院，专业
 它由一所学院以及应用程序和研究中心组成。为了进入高等教育机构，有必要成为一名中学毕业生并成功通过大学入学考试。有权选择大学考试的学生将根据他们的成功排名而被置于他们偏爱的中央偏好系统中的其中一所大学。由于有权选择考试的学生人数与大学配额之间存在差异，因此在选择过程中更加切合实际将有助于您。有关更多详细信息，您可以查看ÖSYM每年发布的大学偏好指南，或访问www.osym.gov.tr。
 州立大学和预科大学提供高等教育服务。国立大学
 在提供免费服务的同时，预科大学会确定自己的年费。但是，州立大学可能会对外国学生收取费用。土耳其高等教育
 土耳其布尔萨可以申请该计划。您可以访问土耳其www.turkiyeburslari.gov.t地址以获取有关奖学金的更多详细信息</p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> 硕士和博士学位</h3>
                            <p class="card-text1">与教育的所有领域一样，土耳其也为您提供大量的学术职业机会。拥有学士学位的硕士学位（硕士）和博士学位
 对教育的需求日益增加。土耳其可以满足这一需求，并且是世界上具有教育质量的少数国家之一。毕业后，您必须首先决定要攻读硕士学位的系和大学。不要忘记，每个系和大学都有自己的特定入学要求。尽管大学和课程在入学方面有所不同，但要求通过诸如基础科学考试（ALES，GRA等）的考试获得成功分数您可以访问www.osym.gov.tr或访问打算申请的大学的学生事务办公室，以获取有关您需要参加的考试以及硕士和博士学位课程要求的更多详细信息。
 如果您已完成学业，而无需参考土耳其外的毕业生
 首先，您需要完成本科文凭课程的等效程序。对于您的主人在土耳其以外的地方，在医生期间也是如此 </p>
                    </div>
 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                            <h3 style={{color:"#A4203A"}}><SchoolIcon style={{fontSize:"x-large",color:"black"}}/> 开放教育</h3>
                            <p class="card-text1" >那些尚未完成正规教育的人可以根据需要进入开放式教育学校，以完成义务中等教育。 如果您也是如此，那么在获得同等学历证书后，您将从您所在省的国家教育局公共教育中获得证书。
  您可以通过去中央局注册并申请。 开放式教育单位
  如下；</p>
                         <ul className="card-list">
                                 <li>开放教育中学； 它为小学毕业生和任何初级教育水平的毕业生提供了完成小学教育的机会。</li>
                                 <li>开放教育高中； 已完成初等教育但未继续接受中等教育的人，或
  它为离开中学教育的人们提供了接受教育的机会。 如果出国留学的学生具有同等文件中指定的教育水平，则他们是开放的。
  可以参加高中教学</li>
                                 <li>教学伊玛目哈蒂普高中； 那些已经完成初等教育，不继续接受中等教育或高等教育的毕业生也可以申请。 </li>
 
 ​
                         </ul>
                    </div>
                  
                   
                    
              
 
        </div>
        </div>
    )
}
