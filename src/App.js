/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import TrMenu from "./components/turkish/menu/Menu";
import Footer from "./components/turkish/footer/Footer";
import Home from "./components/turkish/home-page/Home";
import About from "./components/turkish/about-page/About";
import Services from "./components/turkish/services-page/Service";
import Reference from "./components/turkish/references-page/Reference";
import Blog from "./components/turkish/blog/Blog";
import Contact from "./components/turkish/contact-page/Contact";
import Notfound from "./components/turkish/notfound/Notfound";
import Turk from "./components/turkish/services-page/turk-vatandasligi/Turk";
import Admin from "./components/turkish/admin/Admin";
import Egitim from "./components/turkish/investment/turkiyede-egitim/Egitim";
import TurkSaglik from "./components/turkish/investment/turkiyede-saglik/TurkSaglik";
import Yasam from "./components/turkish/investment/turkiyede-yasam/Yasam";
import Yatirim from "./components/turkish/investment/turkiyede-yatirim/Yatirim";
import AltBlog from "./components/turkish/blog/Altblog";
import ServicePage from "./components/turkish/services-page/ServicePage";

import EngMenu from "./components/english/menu/Menu";
import EngFooter from "./components/english/footer/Footer";
import EngHome from "./components/english/home-page/Home";
import EngAbout from "./components/english/about-page/About";
import EngServices from "./components/english/services-page/Service";
import EngReference from "./components/english/references-page/Reference";
import EngBlog from "./components/english/blog/Blog";
import EngContact from "./components/english/contact-page/Contact";
import EngTurk from "./components/english/services-page/turk-vatandasligi/Turk";
import EngAdmin from "./components/english/admin/Admin";
import EngEgitim from "./components/english/investment/turkiyede-egitim/Egitim";
import EngTurkSaglik from "./components/english/investment/turkiyede-saglik/TurkSaglik";
import EngYasam from "./components/english/investment/turkiyede-yasam/Yasam";
import EngYatirim from "./components/english/investment/turkiyede-yatirim/Yatirim";
import EngAltBlog from "./components/english/blog/Altblog";
import EngServicePage from "./components/english/services-page/ServicePage";

import ChiMenu from "./components/chineese/menu/Menu";
import ChiFooter from "./components/chineese/footer/Footer";
import ChiHome from "./components/chineese/home-page/Home";
import ChiAbout from "./components/chineese/about-page/About";
import ChiServices from "./components/chineese/services-page/Service";
import ChiReference from "./components/chineese/references-page/Reference";
import ChiBlog from "./components/chineese/blog/Blog";
import ChiContact from "./components/chineese/contact-page/Contact";
import ChiTurk from "./components/chineese/services-page/turk-vatandasligi/Turk";
import ChiAdmin from "./components/chineese/admin/Admin";
import ChiEgitim from "./components/chineese/investment/turkiyede-egitim/Egitim";
import ChiTurkSaglik from "./components/chineese/investment/turkiyede-saglik/TurkSaglik";
import ChiYasam from "./components/chineese/investment/turkiyede-yasam/Yasam";
import ChiYatirim from "./components/chineese/investment/turkiyede-yatirim/Yatirim";
import ChiAltBlog from "./components/chineese/blog/Altblog";
import ChiServicePage from "./components/chineese/services-page/ServicePage";

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
        
        <nav className="navbar navbar-inverse navbar-fixed-top" style={{ backgroundColor: "#222222", padding: "0%", margin: "0%" }}>
          
          {state === "chi" && (
            <label style={{ padding: "1%" }} onClick={handleChange}>
              Chineese
            </label>
          )}
          
          {state === "eng" && (
            <label style={{ padding: "1%" }} onClick={handleChange}>
              English
            </label>
          )}
          
          {state === "tr" && (
            <label style={{ padding: "1%" }} onClick={handleChange}>
              Turkish
            </label>
          )}

          {state === "chi" && <ChiMenu />}
          {state === "eng" && <EngMenu />}
          {state === "tr" && <TrMenu />}
        
        </nav>
        <br/>

        <div className="container-fluid">

          <Switch>
           
            <Route exact path="/" component={Home} />
            <Route exact path="/hakkimizda" component={About} />
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


            <Route exact path="/eng" component={EngHome} />
            <Route exact path="/about-us" component={EngAbout} />
            <Route exact path="/services" component={EngServices} />
            <Route exact path="/references" component={EngReference} />
            <Route exact path="/en-blog" component={EngBlog} />
            <Route exact path="/contact" component={EngContact} />
            <Route exact path="/turkish-citizenship" component={EngTurk} />
            <Route exact path="/education-in-turkey" component={EngEgitim} />
            <Route exact path="/health-in-turkey" component={EngTurkSaglik} />
            <Route exact path="/life-in-turkey" component={EngYasam} />
            <Route exact path="/investment-in-turkey" component={EngYatirim} />

            {services.map((service, index) => (
              <Route
                exact
                path={"/services/" + service.heading}
                component={EngServicePage}
              />
            ))}

            {blogs.map((blog, index) => (
              <Route
                exact
                path={"/eng-blogs/" + blog.heading}
                component={EngAltBlog}
              />
            ))}

            

            <Route exact path="/chi" component={ChiHome} />
            <Route exact path="/about-us" component={ChiAbout} />
            <Route exact path="/services" component={ChiServices} />
            <Route exact path="/references" component={ChiReference} />
            <Route exact path="/en-blog" component={ChiBlog} />
            <Route exact path="/contact" component={ChiContact} />
            <Route exact path="/turkish-citizenship" component={ChiTurk} />
            <Route exact path="/education-in-turkey" component={ChiEgitim} />
            <Route exact path="/health-in-turkey" component={ChiTurkSaglik} />
            <Route exact path="/life-in-turkey" component={ChiYasam} />
            <Route exact path="/investment-in-turkey" component={ChiYatirim} />

            {services.map((service, index) => (
              <Route
                exact
                path={"/services/" + service.heading}
                component={ChiServicePage}
              />
            ))}

            {blogs.map((blog, index) => (
              <Route
                exact
                path={"/eng-blogs/" + blog.heading}
                component={ChiAltBlog}
              />
            ))}

            <Route exact path="/admin" component={Admin} />
            <Route exact path="/eng-admin" component={EngAdmin} />
            <Route exact path="/chi-admin" component={ChiAdmin} />
            <Route component={Notfound} />

          </Switch>
          <div
            id="footer"
            className="col-12"
            style={{ width: "100%", backgroundColor: "#f8f9fa"}}
          >
            
            {state === "chi" && <ChiFooter />}
            {state === "eng" && <EngFooter />}
            {state === "tr" && <Footer/>}
          </div>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
