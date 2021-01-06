/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "./firebase";

import Navbar from "./components/turkish/navbar/Navbar";
import Logo from "./components/turkish/logo/Logo";
import Footer from "./components/turkish/footer/Footer";
import Home from "./components/turkish/home-page/Home";

import About from "./components/turkish/kurumsal/about-page/About";
import Tüzük from "./components/turkish/kurumsal/tüzük/Tüzük";
import Yönetim from "./components/turkish/kurumsal/yonetim_kurulu/YonetimKurulu";
import Üyelik from "./components/turkish/kurumsal/uyelik_basvurusu/UyelikBasvurusu";

import UyelerinHukukiHizmetleri from "./components/turkish/hizmetler/uyelerin_hukuki_hizmetleri/UyelerinHukukiHizmetleri";
import İkametCalısmaİzni from "./components/turkish/hizmetler/ikamet_calisma_izni/İkametCalısmaİzni";
import HukukiYardım from "./components/turkish/hizmetler/hukuki_yardım/HukukiYardım";
import HukukiDanısma from "./components/turkish/hizmetler/hukuki_danısma/HukukiDanısma";
import MaliDanısma from "./components/turkish/hizmetler/mali_danısma/MaliDanısma";
import OzelDurumlardaHukukiYardım from "./components/turkish/hizmetler/özel_durumlarda_hukuki_yardım/OzelDurumlardaHukukiYardım";

import GecmisDavalarIslemler from "./components/turkish/faaliyetler/gecmis_davalar_islemler/GecmisDavalarIslemler";
import Kesif from "./components/turkish/faaliyetler/kesif/Kesif";
import DavacıDavalıDosya from "./components/turkish/faaliyetler/davacı_davalı_dosya/DavacıDavalıDosya";
import EvlilikIcindeSorun from "./components/turkish/faaliyetler/evlilik_icinde_sorun/EvlilikIcindeSorun";
import Sigorta from "./components/turkish/faaliyetler/sigorta/Sigorta";

import Haber from "./components/turkish/medya/haber/Haber";
import Duyuru from "./components/turkish/medya/duyuru/Duyuru";

import Fotograf from "./components/turkish/galeri/fotograf/Fotograf";
import Video from "./components/turkish/galeri/video/Video";

import Services from "./components/turkish/services-page/Service";
import Reference from "./components/turkish/references-page/Reference";
import Blog from "./components/turkish/medya/blog/Blog";
import Contact from "./components/turkish/contact-page/Contact";
import Notfound from "./components/turkish/notfound/Notfound";
import Turk from "./components/turkish/services-page/turk-vatandasligi/Turk";
import Admin from "./components/turkish/admin/Admin";
import Egitim from "./components/turkish/investment/turkiyede-egitim/Egitim";
import TurkSaglik from "./components/turkish/investment/turkiyede-saglik/TurkSaglik";
import Yasam from "./components/turkish/investment/turkiyede-yasam/Yasam";
import Yatirim from "./components/turkish/investment/turkiyede-yatirim/Yatirim";
import AltBlog from "./components/turkish/medya/blog/Altblog";
import ServicePage from "./components/turkish/services-page/ServicePage";


function App() {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // fires once when the app loads
    db.collection("services")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            serviceContent: doc.data().service_content,
            underServiceHead1: doc.data().under_service_head1,
            underServiceHead2: doc.data().under_service_head2,
            underServiceHead3: doc.data().under_service_head3,
            underServiceText1: doc.data().under_service_text1,
            underServiceText2: doc.data().under_service_text2,
            underServiceText3: doc.data().under_service_text3,
          }))
        );
      });

    db.collection("blogs")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            heading: doc.data().heading,
            content: doc.data().blog_content,
          }))
        );
      });
  }, []);

  const [state, setState] = useState("chi");

  const handleChange = () => {
    if (state === "chi") {
      setState("eng");
    } else if (state === "eng") {
      setState("tr");
    } else if (state === "tr") {
      setState("chi");
    }
  };
  return (
    <Router>
      <div className="container-fluid app">
        <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor: "#ffffff"}}>
              <Logo/>
        </nav>
        
        <nav className="navbar navbar-inverse navbar-fixed-top menu" style={{ backgroundColor: "#A4203A", padding: "0%", margin: "0%",marginTop:"18rem" }}>

          <Navbar/>
        </nav>
      
         
        <br/>

        <div className="container-fluid">

          <Switch>
           
            <Route exact path="/" component={Home} />

            <Route exact path="/hakkimizda" component={About} />
            <Route exact path="/tuzuk" component={Tüzük} />
            <Route exact path="/yonetim-kurulu" component={Yönetim} />
            <Route exact path="/uyelik-basvurusu" component={Üyelik} />

            <Route exact path="/uyelerin-hukuki-hizmetleri" component={UyelerinHukukiHizmetleri} />
            <Route exact path="/ikamet-calisma-izni" component={İkametCalısmaİzni} />
            <Route exact path="/hukuki-yardim" component={HukukiYardım} />
            <Route exact path="/hukuki-danisma" component={HukukiDanısma} />
            <Route exact path="/mali-danisma" component={MaliDanısma} />
            <Route exact path="/ozel-durumlarda-hukuki-yardim" component={OzelDurumlardaHukukiYardım} />

            <Route exact path="/gecmis-davalar-ve-islemler" component={GecmisDavalarIslemler} />
            <Route exact path="/kesif" component={Kesif} />
            <Route exact path="/davaci-veya-davali-dosya" component={DavacıDavalıDosya} />
            <Route exact path="/evlilik-icinde-sorun" component={EvlilikIcindeSorun} />
            <Route exact path="/sigorta" component={Sigorta} />

            <Route exact path="/haberler" component={Haber} />
            <Route exact path="/duyurular" component={Duyuru} />

            <Route exact path="/fotograflar" component={Fotograf} />
            <Route exact path="/videolar" component={Video} />

            <Route exact path="/hizmetlerimiz" component={Services} />
            <Route exact path="/referanslarimiz" component={Reference} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/iletisim" component={Contact} />
            <Route exact path="/turk-vatandasligi" component={Turk} />
            <Route exact path="/turkiyede-egitim" component={Egitim} />
            <Route exact path="/turkiyede-saglik" component={TurkSaglik} />
            <Route exact path="/turkiyede-yasam" component={Yasam} />
            <Route exact path="/turkiyede-yatirim" component={Yatirim} />

            {services.map((service, index) => (
              <Route
                exact
                path={"/hizmetlerimiz/" + service.heading}
                component={ServicePage}
              />
            ))}

            {blogs.map((blog, index) => (
              <Route
                exact
                path={"/blogs/" + blog.heading}
                component={AltBlog}
              />
            ))}


            
            <Route exact path="/admin" component={Admin} />
            <Route component={Notfound} />

          </Switch>
              
            <div className="row harita" style={{marginLeft:"-3rem",marginRight:"-3rem"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.593095300537!2d32.85717809978627!3d39.890760560175714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f8255924da3%3A0x21e8de7da6a71210!2s%C3%87ankaya%2C%20Cinnah%20Cd.%2067-69%2C%2006690%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1609827468241!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",border:"2px #A4203A solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
            </div> 
         
            <Footer/>
         
        
        </div>
      </div>
    </Router>
  );
}

export default App;
