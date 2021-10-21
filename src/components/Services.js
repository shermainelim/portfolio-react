import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Full Stacks Development</h3>
              <p>
                Your project will be built with the best and latest technology.
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>SDLC and Agile </h3>
              <p>
                Results orientated towards each project's Software Development
                Life Cycle individually.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>Data Analytics and SQL</h3>
              <p>
                Data Ingestion, Visual Charts, PowerBI, SQL Query and Python
                Machine Learning
              </p>
            </div>
          </div>
          {/*-*/}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Cloud Deployment</h3>
              <p>Azure and AWS for Deploying Applications to Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
