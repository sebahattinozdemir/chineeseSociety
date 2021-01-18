/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "./firebase";

import TrFlag from "./turkish.ico";
import Navbar from "./components/turkish/navbar/Navbar";
import Logo from "./components/turkish/logo/Logo";
import Footer from "./components/turkish/footer/Footer";
import Home from "./components/turkish/home-page/Home";
import Baskan from "./components/turkish/kurumsal/baskan-mesaji/Baskan";
import Yönetim from "./components/turkish/kurumsal/yonetim_kurulu/YonetimKurulu";
import Üyeler from "./components/turkish/kurumsal/uyelerimiz/Uyeler";
import Tüzük from "./components/turkish/kurumsal/tüzük/Tüzük";
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
import Blog from "./components/turkish/medya/blog/Blog";
import Contact from "./components/turkish/contact-page/Contact";
import Notfound from "./components/turkish/notfound/Notfound";
import Admin from "./components/turkish/admin/Admin";
import Egitim from "./components/turkish/investment/turkiyede-egitim/Egitim";
import TurkSaglik from "./components/turkish/investment/turkiyede-saglik/TurkSaglik";
import Yasam from "./components/turkish/investment/turkiyede-yasam/Yasam";
import Yatirim from "./components/turkish/investment/turkiyede-yatirim/Yatirim";
import AltBlog from "./components/turkish/medya/blog/Altblog";
import AltHaber from "./components/turkish/medya/haber/Althaber";

import ChFlag from "./chinese.ico";
import ChiLogo from "./components/chinese/logo/Logo";
import ChiNavbar from "./components/chinese/navbar/Navbar";
import ChiFooter from "./components/chinese/footer/Footer";
import ChiHome from "./components/chinese/home-page/Home";
import ChiFotograf from "./components/chinese/galeri/fotograf/Fotograf";
import ChiVideo from "./components/chinese/galeri/video/Video";
import ChiContact from "./components/chinese/contact-page/Contact";
import ChiHaber from "./components/chinese/medya/haber/Haber";
import ChiDuyuru from "./components/chinese/medya/duyuru/Duyuru";
import ChiBlog from "./components/chinese/medya/blog/Blog";
import ChiGecmisDavalarIslemler from "./components/chinese/faaliyetler/gecmis_davalar_islemler/GecmisDavalarIslemler";
import ChiKesif from "./components/chinese/faaliyetler/kesif/Kesif";
import ChiDavacıDavalıDosya from "./components/chinese/faaliyetler/davacı_davalı_dosya/DavacıDavalıDosya";
import ChiEvlilikIcindeSorun from "./components/chinese/faaliyetler/evlilik_icinde_sorun/EvlilikIcindeSorun";
import ChiSigorta from "./components/chinese/faaliyetler/sigorta/Sigorta";
import ChiBaskan from "./components/chinese/kurumsal/baskan-mesaji/Baskan";
import ChiYönetim from "./components/chinese/kurumsal/yonetim_kurulu/YonetimKurulu";
import ChiÜyeler from "./components/chinese/kurumsal/uyelerimiz/Uyeler";
import ChiTüzük from "./components/chinese/kurumsal/tüzük/Tüzük";
import ChiÜyelik from "./components/chinese/kurumsal/uyelik_basvurusu/UyelikBasvurusu";
import ChiUyelerinHukukiHizmetleri from "./components/chinese/hizmetler/uyelerin_hukuki_hizmetleri/UyelerinHukukiHizmetleri";
import ChiİkametCalısmaİzni from "./components/chinese/hizmetler/ikamet_calisma_izni/İkametCalısmaİzni";
import ChiHukukiYardım from "./components/chinese/hizmetler/hukuki_yardım/HukukiYardım";
import ChiHukukiDanısma from "./components/chinese/hizmetler/hukuki_danısma/HukukiDanısma";
import ChiMaliDanısma from "./components/chinese/hizmetler/mali_danısma/MaliDanısma";
import ChiOzelDurumlardaHukukiYardım from "./components/chinese/hizmetler/özel_durumlarda_hukuki_yardım/OzelDurumlardaHukukiYardım";
import ChiAdmin from "./components/chinese/admin/Admin";
import ChiEgitim from "./components/chinese/investment/turkiyede-egitim/Egitim";
import ChiYatirim from "./components/chinese/investment/turkiyede-yatirim/Yatirim";
import ChiSaglik from "./components/chinese/investment/turkiyede-saglik/TurkSaglik";
import ChiYasam from "./components/chinese/investment/turkiyede-yasam/Yasam";
import ChiAltBlog from "./components/chinese/medya/blog/Altblog";
import ChiAltHaber from "./components/chinese/medya/haber/Althaber";

function App() {

  const [blogs, setBlogs] = useState([]);
  const [haberler, setHaberler] = useState([]);

  const [chiBlogs, setChiBlogs] = useState([]);
  const [chiHaberler, setChiHaberler] = useState([]);

  useEffect(() => {
    // fires once when the app loads

    db.collection("chi-blogs")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setChiBlogs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().heading,
              content: doc.data().blog_content,
            }))
          );
        });
        db.collection("chi-haberler")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setChiHaberler(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().baslik,
              content: doc.data().haberContent,
            }))
          );
        });
  }, []);

  const [state, setState] = useState(true);

  const handleChange = () => {
    setState(!state);
    if (state) {
      
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

        db.collection("haberler")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setHaberler(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().baslik,
              content: doc.data().haberContent,
            }))
          );
        });


    } else {
      db.collection("chi-blogs")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setChiBlogs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().heading,
              content: doc.data().blog_content,
            }))
          );
        });
        db.collection("chi-haberler")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setChiHaberler(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              heading: doc.data().baslik,
              content: doc.data().haberContent,
            }))
          );
        });
    }
  };
  return (
    <Router>
      <div className="row app">
        <div className="row" id="menu">
          <div className="row languageOption">
            {state === true ? (
              <Link to="/tr">
                <label
                  onClick={handleChange}
                  style={{ color: "black", marginTop: "1rem" }}
                >
                  <img
                    src={TrFlag}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      marginLeft: "1rem",
                    }}
                  ></img>{" "}
                  &nbsp;Türkçe
                </label>
              </Link>
            ) : (
              <Link to="/">
                <label
                  onClick={handleChange}
                  style={{ color: "black", marginTop: "1rem" }}
                >
                  <img
                    src={ChFlag}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      marginLeft: "1rem",
                    }}
                  ></img>{" "}
                  &nbsp;中文
                </label>
              </Link>
            )}
          </div>

          <div className="row ">
            {state === true ? (
              <nav className="navbar" style={{ backgroundColor: "#ffffff" }}>
                <ChiLogo />
              </nav>
            ) : (
              <nav className="navbar" style={{ backgroundColor: "#ffffff" }}>
                <Logo />
              </nav>
            )}
          </div>

          {state === true ? (
            <nav
              className="navbar menu"
              style={{
                backgroundColor: "#A4203A",
                padding: "0%",
                marginBottom: "0",
              }}
            >
              <ChiNavbar />
            </nav>
          ) : (
            <nav
              className="navbar menu"
              style={{
                backgroundColor: "#A4203A",
                padding: "0%",
                marginBottom: "0",
              }}
            >
              <Navbar />
            </nav>
          )}
        </div>

        <br />

        <div className="row">
          <Switch>
            <Route exact path="/" component={ChiHome} />
            <Route exact path="/chi-turkiyede-egitim" component={ChiEgitim} />
            <Route exact path="/chi-turkiyede-saglik" component={ChiSaglik} />
            <Route exact path="/chi-turkiyede-yasam" component={ChiYasam} />
            <Route exact path="/chi-turkiyede-yatirim" component={ChiYatirim} />
            <Route exact path="/chi-fotograflar" component={ChiFotograf} />
            <Route exact path="/chi-videolar" component={ChiVideo} />
            <Route exact path="/chi-iletisim" component={ChiContact} />
            <Route exact path="/chi-haberler" component={ChiHaber} />
            {chiHaberler.map((haber, index) => (
              <Route
                exact
                path={"/chi-haberler/" + haber.heading}
                component={ChiAltHaber}
              />
            ))}
            <Route exact path="/chi-duyurular" component={ChiDuyuru} />
            <Route exact path="/chi-blog" component={ChiBlog} />

            {chiBlogs.map((blog, index) => (
              <Route
                exact
                path={"/chi-blogs/" + blog.heading}
                component={ChiAltBlog}
              />
            ))}

            <Route
              exact
              path="/chi-uyelerin-hukuki-hizmetleri"
              component={ChiUyelerinHukukiHizmetleri}
            />
            <Route
              exact
              path="/chi-ikamet-calisma-izni"
              component={ChiİkametCalısmaİzni}
            />
            <Route
              exact
              path="/chi-hukuki-yardim"
              component={ChiHukukiYardım}
            />
            <Route
              exact
              path="/chi-hukuki-danisma"
              component={ChiHukukiDanısma}
            />
            <Route exact path="/chi-mali-danisma" component={ChiMaliDanısma} />
            <Route
              exact
              path="/chi-ozel-durumlarda-hukuki-yardim"
              component={ChiOzelDurumlardaHukukiYardım}
            />

            <Route exact path="/chi-baskanin-mesaji" component={ChiBaskan} />
            <Route exact path="/chi-tuzuk" component={ChiTüzük} />
            <Route exact path="/chi-uyelerimiz" component={ChiÜyeler} />
            <Route exact path="/chi-yonetim-kurulu" component={ChiYönetim} />
            <Route exact path="/chi-uyelik-basvurusu" component={ChiÜyelik} />

            <Route
              exact
              path="/chi-gecmis-davalar-ve-islemler"
              component={ChiGecmisDavalarIslemler}
            />
            <Route exact path="/chi-kesif" component={ChiKesif} />
            <Route
              exact
              path="/chi-davaci-veya-davali-dosya"
              component={ChiDavacıDavalıDosya}
            />
            <Route
              exact
              path="/chi-aile-hukuku-davalari"
              component={ChiEvlilikIcindeSorun}
            />
            <Route exact path="/chi-sigorta" component={ChiSigorta} />

            <Route exact path="/admin" component={ChiAdmin} />

            <Route exact path="/tr" component={Home} />

            <Route exact path="/baskanin-mesaji" component={Baskan} />
            <Route exact path="/tuzuk" component={Tüzük} />
            <Route exact path="/uyelerimiz" component={Üyeler} />
            <Route exact path="/yonetim-kurulu" component={Yönetim} />
            <Route exact path="/uyelik-basvurusu" component={Üyelik} />

            <Route
              exact
              path="/uyelerin-hukuki-hizmetleri"
              component={UyelerinHukukiHizmetleri}
            />
            <Route
              exact
              path="/ikamet-calisma-izni"
              component={İkametCalısmaİzni}
            />
            <Route exact path="/hukuki-yardim" component={HukukiYardım} />
            <Route exact path="/hukuki-danisma" component={HukukiDanısma} />
            <Route exact path="/mali-danisma" component={MaliDanısma} />
            <Route
              exact
              path="/ozel-durumlarda-hukuki-yardim"
              component={OzelDurumlardaHukukiYardım}
            />

            <Route
              exact
              path="/gecmis-davalar-ve-islemler"
              component={GecmisDavalarIslemler}
            />
            <Route exact path="/kesif" component={Kesif} />
            <Route
              exact
              path="/davaci-veya-davali-dosya"
              component={DavacıDavalıDosya}
            />
            <Route
              exact
              path="/aile-hukuku-davalari"
              component={EvlilikIcindeSorun}
            />
            <Route exact path="/sigorta" component={Sigorta} />

            <Route exact path="/haberler" component={Haber} />
            {haberler.map((haber, index) => (
              <Route
                exact
                path={"/haberler/" + haber.heading}
                component={AltHaber}
              />
            ))}
            <Route exact path="/duyurular" component={Duyuru} />

            <Route exact path="/fotograflar" component={Fotograf} />
            <Route exact path="/videolar" component={Video} />

            <Route exact path="/blog" component={Blog} />
            {blogs.map((blog, index) => (
              <Route
                exact
                path={"/blogs/" + blog.heading}
                component={AltBlog}
              />
            ))}

            <Route exact path="/iletisim" component={Contact} />

            <Route exact path="/turkiyede-egitim" component={Egitim} />
            <Route exact path="/turkiyede-saglik" component={TurkSaglik} />
            <Route exact path="/turkiyede-yasam" component={Yasam} />
            <Route exact path="/turkiyede-yatirim" component={Yatirim} />

            <Route exact path="/tr-admin" component={Admin} />
            <Route component={Notfound} />
          </Switch>

          <div id="footer">{state === true ? <ChiFooter /> : <Footer />}</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
