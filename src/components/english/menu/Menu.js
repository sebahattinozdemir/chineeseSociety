import React from "react";
import NarV5 from "./narV5.png";
import BusinessIcon from "@material-ui/icons/Business";
import GroupIcon from "@material-ui/icons/Group";
import GavelIcon from "@material-ui/icons/Gavel";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link className="menu-item-link logo" to="/">
          <img
            style={{
              height: "auto",
              width: "8rem",
            }}
            src={NarV5}
            alt="hukuk"
            title="Nar Göç ve Danışmanlık"
          ></img>
        </Link>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active">
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/eng"
            >
              <HomeIcon style={{ fontSize: "24px", color: "#A4203A" }} />
              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                {" "}
                 HOME
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/about-us"
            >
              <BusinessIcon style={{ fontSize: "24px", color: "#A4203A" }} />
              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                {" "}
                ABOUT US
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/services"
            >
              <GavelIcon style={{ fontSize: "24px", color: "#A4203A" }} />
              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                {" "}
                SERVICES
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/references"
            >
              <GroupIcon style={{ fontSize: "24px", color: "#A4203A" }} />
              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                {" "}
                REFERENCES
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/en-blog"
            >
              <AssignmentIcon
                style={{ fontSize: "24px", color: "#A4203A" }}
              />

              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                BLOG
              </span>
            </Link>
          </li>
          <li>
            <Link
              style={{ display: "flex" }}
              className="menu-item-link"
              to="/contact"
            >
              <ContactPhoneIcon
                style={{ fontSize: "24px", color: "#A4203A" }}
              />

              <span style={{ paddingTop: "4px", paddingLeft: "4px" }}>
                CONTACT
              </span>
            </Link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a
              className="menu-item-link"
              href="https://www.facebook.com/adli.sicil.1"
              style={{ float: "left" }}
            >
              <FacebookIcon style={{ fontSize: "24px" }} />
            </a>
          </li>

          <li>
            <a
              className="menu-item-link"
              href="https://wa.me/+905376971155"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon style={{ fontSize: "24px" }} />
            </a>
          </li>
          <li>
            <a
              className="menu-item-link"
              href="tel: +905376971155"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon style={{ fontSize: "24px" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Menu;
