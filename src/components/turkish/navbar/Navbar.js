import "./Navbar.css";
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from '@material-ui/icons/Work';
import GavelIcon from "@material-ui/icons/Gavel";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from '@material-ui/icons/Email';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className="row p-0 m-0"
        style={{
          display: "flex",
          justifyContent: "center",
         
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
                <HomeIcon style={{fontSize:"medium"}}/> ANA SAYFA
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
                  <BusinessIcon style={{fontSize:"medium"}}/> KURUMSAL
                </a>
             
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/hakkimizda">
                    Hakkımızda
                  </Link>

                  <Link className="dropdown-item menu-item-link" to="/belgelerimiz">
                    Tüzük
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/referanslarimiz">
                    Yönetim Kurulu
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/is-basvurusu">
                    Üyelik Başvurusu
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
                  <GavelIcon style={{fontSize:"medium"}}/> HİZMETLERİMİZ
                </a>
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/ev-temizligi">
                    Üyelerin Hukuki Hizmetleri
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/insaat-sonrasi-temizlik">
                    İkamet ve Çalışma İzni
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/ofis-temizligi">
                    Hukuki Yardım
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/yerinde-koltuk-yikama">
                    Hukuki Danışma
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/ofis-temizligi">
                    Mali Danışma
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/yerinde-koltuk-yikama">
                    Özel Durumlarda Hukuki Yardım
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
                  <WorkIcon style={{fontSize:"medium"}}/> FAALİYETLERİMİZ
                </a>
               
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/hakkimizda">
                    Daha Önceden Yapılmış Davalar
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/referanslarimiz">
                    Keşif
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/belgelerimiz">
                    Davacı veya Davalı Dosya
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/is-basvurusu">
                    Evlilik İçinde Sorun
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/is-basvurusu">
                    Sigorta
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
                  <AssignmentIcon style={{fontSize:"medium"}}/> MEDYA
                </a>
                
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/ev-temizligi">
                    Haber
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/insaat-sonrasi-temizlik">
                    Duyuru
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/ofis-temizligi">
                    Blog
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
                  
                  <CameraAltIcon style={{fontSize:"medium"}}/> GALERİ
                </a>
          
                
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item menu-item-link" to="/ev-temizligi">
                    Fotoğraf
                  </Link>
                  <Link className="dropdown-item menu-item-link" to="/insaat-sonrasi-temizlik">
                    Video
                  </Link>
                    
                </div>
              </li>

              <li class="nav-item">
                <Link className="nav-link menu-item-link" to="/iletisim" >
                <EmailIcon style={{fontSize:"medium"}}/> İLETİŞİM
                </Link>
              </li>

              
              
            </ul>


          </div>
        </nav>
      </div>
    );
  }
}
