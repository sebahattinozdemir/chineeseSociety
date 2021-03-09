import "./Navbar.css";
import BusinessIcon from "@material-ui/icons/Business";
import GavelIcon from "@material-ui/icons/Gavel";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className="row p-0"
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex:"1",
         
        }}
      >
       
        <nav
          class="navbar navbar-expand-lg navbar-dark p-0 m-0"
         
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" style={{float:"right"}}>
              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/" >
                <HomeIcon style={{fontSize:"large"}}/> 主页
                </Link>
              </li>
            
              <li class="nav-item dropdown">
                <a
                  style={{}}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >
                  <BusinessIcon style={{fontSize:"large"}}/> 关于我们
                </a>
             
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/chi-baskanin-mesaji">
                  会长致辞
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-yonetim-kurulu">
                  管理委员会
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-uyelerimiz">
                  我们会员
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-tuzuk">
                  协会章程 
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-uyelik-basvurusu">
                  会员申请
                  </Link>
                  
                 
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  style={{ }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <GavelIcon style={{fontSize:"large"}}/> 会员服务
                </a>
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/chi-uyelerin-hukuki-hizmetleri">
                  协会相关服务
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-sigorta">
                  保险 
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-ikamet-calisma-izni">
                  居住证和工作许可证
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-hukuki-yardim">
                  法律援助
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-hukuki-danisma">
                  法律咨询
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-mali-danisma">
                  财务咨询
                  </Link>
                  
                  <Link className="dropdown-item menu-item-link" to="/chi-aile-hukuku-davalari">
                  婚姻和家庭案例
                  </Link>
                 
                  <Link className="dropdown-item menu-item-link" to="/chi-ozel-durumlarda-hukuki-yardim">
                  特殊情况下的法律援助
                  </Link>
                  
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  style={{}}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"

                >
                  <BusinessCenterIcon style={{fontSize:"large"}}/> 经典案例 
                </a>
               
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/chi-gecmis-davalar-ve-islemler">
                  案例  
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-kesif">
                  案件调查 
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-davaci-veya-davali-dosya">
                  原告或被告档案
                  </Link>
                 
                  
                 
                </div>
              </li>
              

              <li class="nav-item dropdown">
                <a
                  style={{ }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <AssignmentIcon style={{fontSize:"large"}}/> 媒体
                </a>
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/chi-haberler">
                  新闻
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-duyurular">
                  公告
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-blog">
                  博客
                  </Link> 
                </div>
              </li>
             
              <li class="nav-item dropdown">
                <a
                  style={{ }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  
                  <CameraAltIcon style={{fontSize:"large"}}/> 图片库
                </a>
          
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/chi-fotograflar">
                  照片
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/chi-videolar">
                  视频
                  </Link>
                    
                </div>
              </li>

              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/chi-iletisim" >
                <ContactPhoneIcon style={{fontSize:"large"}}/> 联系
                </Link>
              </li>

              
              
            </ul>


          </div>
        </nav>
      </div>
    );
  }
}
