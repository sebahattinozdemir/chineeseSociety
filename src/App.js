/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import db from "./firebase";

import Navbar from "./components/turkish/navbar/Navbar";
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
        
        <nav className="navbar navbar-inverse navbar-fixed-top" style={{ backgroundColor: "#A4203A", padding: "0%", margin: "0%" }}>

          <Navbar/>
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
