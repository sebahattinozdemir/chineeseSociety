import React from 'react';
import "../../../turkish/investment/turkiyede-egitim/Egitim.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Header from "../../header/Header"; 

export default function TurkSaglik() {
    return (
        <div>
           <Header
               
                title="土耳其的健康"
                icon={<LocalHospitalIcon style={{fontSize: "x-large"}}/>}
            />
            
            <div className="row" style={{margin:"0%",padding:"1%"}}>
                    
                    
          
                   <div className="col-12" style={{marginLeft:"1%",marginRight:"1%"}}>
                           <p class="card-text1">土耳其的医疗服务机会广泛，结构复杂。
  如果您是私人健康保险持有人或普通健康保险持有人，则取决于您的保险范围，您可能有资格获得健康服务。
如果您没有保险，则可以付费享受健康服务。 为了使您有效地受益于健康服务，
  您必须向移民管理局省局注册，土耳其的医疗服务状况取决于您需要在什么情况下知道的情况。
土耳其卫生系统； 紧急卫生服务包括初级，二级和三级卫生保健中心。</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> 紧急卫生服务</h3>
                           <p class="card-text1">紧急医疗服务包括为紧急情况下的人们提供的医疗服务，例如事故，受伤，突发性健康问题。 救护车服务：紧急情况下，您可以致电112获得医疗帮助。 拨打112时，您的紧急情况
您需要提供信息，例如发生的地点，病人或受伤的人数。 112当局可以询问您其他问题，以便为您提供正确的医疗服务，并且您可以正确，完整地回答当局的问题。
至关重要。 医院紧急服务：这些是医院内部提供24小时服务的紧急服务。 您仅应在紧急情况下申请这些服务。
通常，在急诊服务中提供第一医疗响应和欢迎服务</p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> 健康保险制度</h3>
                           <p class="card-text1">只要您居住在土耳其，购买保险即可从有效的医疗保健系统中受益。 如果您购买私人健康保险，则可以根据保险政策的范围获得服务。 私人健康
保险是由许多保险公司以不同的范围和不同的费用确定的。 为了为您选择最合适的保险，咨询保险代理商并进行详细研究将非常有用。 普通健康保险是由省级社会保障局，即公共机构提供的保险。 参加一般健康保险
要求在土耳其居住1年。 但是，外国公民在土耳其学习的学生不受第一学年居住要求的限制
如果他们在注册之日起三个月内提出要求，他们可以购买普通健康保险。 </p>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
                           <h3 style={{color:"#A4203A"}}><LocalHospitalIcon style={{fontSize:"x-large",color:"black"}}/> 普通健康保险承保范围</h3>
                           <p class="card-text1" >当您被纳入一般健康保险体系后，您，您的配偶和未满18岁的子女都可以从健康服务中受益。 但是，如果您未达到20岁的高中或同等学历的子女或企业中的学徒和学徒训练以及职业培训的子女，未婚和未婚子女，未婚且在接受高等教育时被发现残疾的子女以及被确定为残疾的母亲和父亲也可以从医疗服务中受益。 。 普通健康保险因以下原因而终止：由于该人的居留证过期，在外国投保，在另一种情况下被视为普通健康保险持有人，死亡和旷工。 </p>
                   </div>
                 
                  
                   
             

       </div>
        </div>
    )
}
