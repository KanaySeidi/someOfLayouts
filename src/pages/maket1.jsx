import React from "react";
import introPng from "../images/maket1/Intro.png";
import logo from "../images/maket1/logo.png";
import language from "../images/maket1/Language.png";
import heroLeft from "../images/maket1/hero-left.png";
import heroRight from "../images/maket1/hero-right.png";
import card1 from "../images/maket1/Card 1.png";
import card2 from "../images/maket1/Card 2.png";
import card3 from "../images/maket1/Card 3.png";
import technology from "../images/maket1/technology.png";
import download from "../images/maket1/download.png";
import contact from "../images/maket1/Contact.png";
import footer from "../images/maket1/Footer.png";

const Maket1 = () => {
  return (
    <div className="container">
      <div className="intro">
        <img className="intro-png" src={introPng} alt="intro png" />
      </div>
      <div className="intro-nav__list">
        <div className="nav__btn-left">
          <img className="nav__btn-left-img" src={logo} alt="logo png" />
        </div>
        <div className="nav__btn-mid absolute">
          <button>OVERVIEW</button>
          <button>FEATURES</button>
          <button>TECHNOLOGY</button>
          <button>CONTACT</button>
          <button>SIGN UP</button>
        </div>
        <div className="nav__btn-right absolute">
          <img src={language} alt="language section png" />
          <button>LOGIN</button>
        </div>
      </div>
      <div className="hero">
        <div className="hero-left">
          <img src={heroLeft} alt="hero-text" />
        </div>
        <div className="hero-right">
          <img src={heroRight} alt="hero-img" />
        </div>
      </div>
      <div className="features">
        <h2 className="feat-text">Features</h2>
        <div className="feat-cards">
          <img src={card1} alt="cards png" />
        </div>
        <div className="feat-cards">
          <img src={card2} alt="cards png" />
        </div>
        <div className="feat-cards">
          <img src={card3} alt="cards png" />
        </div>
      </div>
      <div className="technology">
        <h2 className="techno-text">Technology</h2>
        <img className="techno-card" src={technology} alt="technology png" />
      </div>
      <div className="download-card">
        <img className="download-png" src={download} alt="download png" />
      </div>
      <div className="contact">
        <img src={contact} alt="" />
      </div>
      <div className="footer">
        <img src={footer} alt="" />
      </div>
    </div>
  );
};

export default Maket1;
