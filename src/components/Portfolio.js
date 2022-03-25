/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import orinonline from "../images/mmo.gif";
import threejs from "../images/threejs.gif";
import bank from "../images/bank.gif";
import Csharp from "../images/csharp.jpg";
import python from "../images/python.png";
import uml from "../images/uml.png";
import react from "../images/react.jpg";
import unity from "../images/unity.png";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Pofrfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={orinonline}
          alt="Webshop and MMORPG Full Stacks (C# and JavaScript)"
        />

        <p>
          <h1>Webshop and MMORPG Full Stacks (C# and JavaScript)</h1>
          <br></br>
          Created webshop with C#, MSSQL, NodeJS & ReThinkDBto load game product
          pages and also integrated Stripe Payment Gateway for premium coin
          purchase that transfers gold to MMORPG game in real time. Our ASP.NET
          CORE is the connector to SQL database and another game database called
          ReThinkDB which we called this restful api coded inside C#.
        </p>
        <b>Deployed Web Shop: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://mmoshop.codewithmagic.io/Products")
          }
        >
          https://mmoshop.codewithmagic.io/Products
        </a>
        <br></br>
        <b>Deployed MMO Game: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("http://mmo3d.codewithmagic.io/")}
        >
          http://mmo3d.codewithmagic.io/
        </a>
        <br></br>
        <b>Featured in Singapore RedHareGames Blog: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://redharegames.wordpress.com/2021/04/15/game-talk-orin-online/"
            )
          }
        >
          https://redharegames.wordpress.com/2021/04/15/game-talk-orin-online/
        </a>
        <br></br>
        <b>
          Youtube on Orin Online Cash Shop System Integration with MMO Game{" "}
        </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://youtu.be/E_KJLQx9X6Q")}
        >
          https://youtu.be/E_KJLQx9X6Q
        </a>
        <br></br>
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/WebShop-Transfer-Gold-to-MMORPG-Characters"
            )
          }
        >
          https://github.com/shermainelim/WebShop-Transfer-Gold-to-MMORPG-Characters
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxNetflix2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={python}
          alt="House Pricing and Breast Cancer Prediction System"
        />
        <p>
          <h1>House Pricing and Breast Cancer Prediction System</h1>
          <br></br>
          Abstract: In Part A, we will use linear regression. The data has been
          experimented with 2 types of linear regression model: Multiple Linear
          Regression and Polynomial Regression. In Part B and C, we will use a
          different dataset which is on Breast Cancer data to apply to
          supervised and unsupervised machine learning models. Breast cancer is
          the second highest cause of death from cancer among women, in the case
          of United States. Breast cancer occurs as a result of tumours in the
          breast tissue. The intention of this study is to design an accurate
          prediction system through various machine learning models of Python to
          predict whether a tumour is malignant or benign.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/KC-House-Pricing-Linear-Regression-and-Breast-Cancer-Machine-Learning-Prediction-System"
            )
          }
        >
          https://github.com/shermainelim/KC-House-Pricing-Linear-Regression-and-Breast-Cancer-Machine-Learning-Prediction-System
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Spring Boot and Java
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={threejs}
          alt="Three.js 3D JavaScript Profile"
        />
        <p>
          <h1>Three.js 3D JavaScript Profile</h1>
          <br></br>A 3D Visual Moving Profile using Three.js. Demo deployed on
          Netlify.
        </p>
        <b>Online 3D Demo: </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://codingwithmagic.netlify.app/", "_blank")
          }
        >
          https://codingwithmagic.netlify.app/
        </a>
        <br></br>
        <br />
        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/shermainelim/3D-website", "_blank")
          }
        >
          https://github.com/shermainelim/3D-website
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxCityGuide2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={uml}
          alt="System Design and Analysis on Online Supermarket "
        />
        <p>
          <h1>System Design and Analysis on Online Supermarket</h1>
          <br></br>
          System Analysis and Design of Transforming a Brick & Mortar
          Supermarket into Comprehensive Online Ecommerce and Warehouse
          Management System Integration. PDF on ful report , proposal to CEO and
          video presentation provided.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/Leave-Application-System_Spring-Boot-Javahttps://github.com/shermainelim/Online-Supermarket-System-Design-Analysis",
              "_blank"
            )
          }
        >
          https://github.com/shermainelim/Online-Supermarket-System-Design-Analysis
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "threejs",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={bank}
          alt="React Native Bank App"
        />
        <p>
          <h1>React Native Bank App</h1>
          <br></br>A mobile bank application to transfer money to accounts.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/shermainelim/Bank-Mobile", "_blank")
          }
        >
          https://github.com/shermainelim/bankOnline
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "React Native Bank App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio2 = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={react}
          alt="React.JS and BootStrap Portfolio"
        />
        <p>
          <h1>React.JS and BootStrap Portfolio </h1>
          <br></br>
          The portfolio that you are viewing right now was built with React.JS
          and Bootstrap.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/portfolio-react",
              "_blank"
            )
          }
        >
          https://github.com/shermainelim/portfolio-react
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  // Webshop and MMORPG Full Stacks (C# and JavaScript)
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={Csharp} alt="" />
        <p>
          <h1>
            Logic University Supply Chain and Machine Learning Forecasting{" "}
          </h1>
          <br></br>
          This project is about delivering a software solution aimed at
          improving LOGIC University Stationary Store’s inventory and
          disbursement system. Its main objective is to eliminate the reliance
          on manual processes - mainly overcoming the need to store essential
          documents in the form of hardcopies and hence allowing greater
          efficiency by reducing the amount of manual work that would be
          involved in tracking and maintaining these documents.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/Logic-University-Stationery-Inventory-System",
              "_blank"
            )
          }
        >
          https://github.com/shermainelim/Logic-University-Stationery-Inventory-System
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Webshop and MMORPG Full Stacks (C# and JavaScript)
  const openPopupboxTaskManager2 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={unity} alt="AR VR 3D" />
        <p>
          <h1>Unity 3D AR VR </h1>
          <br></br>
          Unity 3D and Vuforia AR Hatsune Miku 3D Model with audio- Augmented
          Reality.
        </p>

        <b>GitHub: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/shermainelim/Augmented-Reality-Miku",
              "_blank"
            )
          }
        >
          https://github.com/shermainelim/Augmented-Reality-Miku
        </a>
        <br></br>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={orinonline}
              alt="Webshop and MMORPG Full Stacks (C# and JavaScript)"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>C#, JavaScript Webshop and MMO Game</div>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={threejs} alt="threejs" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>Three.js 3D Portfolio</div>
          </div>

          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={bank}
              alt="React Native Bank App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>React Native Mobile Bank App</div>
          </div>
          {/* - Below is duplicate*/}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={Csharp}
              alt="Logic University Stationery eStore with Machine Learning Integration"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>Supply Chain and Machine Learning</div>
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxNetflix2}>
            <img
              className="portfolio-image"
              src={python}
              alt="House Pricing and Breast Cancer Prediction System"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>Python Machine Learning Cancer Prediction</div>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide2}>
            <img
              className="portfolio-image"
              src={uml}
              alt="System Analysis and Design of Online Supermarket"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>System Design of E-Supermarket</div>
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio2}>
            <img
              className="portfolio-image"
              src={react}
              alt="React.JS and BootStrap Portfolio"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>React.JS Web Portfolio</div>
          </div>

          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager2}
          >
            <img
              className="portfolio-image"
              src={unity}
              alt="Basic AR VR Project done with Unity 3D and Vuforia AR "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            <div>Unity 3D and Vuforia AR Mobile</div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Pofrfolio;
