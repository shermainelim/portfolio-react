import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022-Present</h3>
            <p>
              Frontend Developer and Associate Consultant doing React.js and
              Typescript for features in bank application. Studying Masters Of
              Computer Science at Georgia Institute of Technology.
            </p>
          </div>
        </div>
        {/* - */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <p>
              Application Developer doing Cross Platform Mobile Development
              (Android & iOS) using React Native and Expo Technology. Also
              handle Data Analytics , Data Ingestion and use PowerBI for data
              and chart visualization.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              Govtech Software Engineer Internship and studied in NUS Post
              Graduate Diploma in Systems Analysis. Did Software Development
              Life Cycle, Agile and Scrum, SQL, Web and Mobile Full Stacks
              Development using mainly MVC architecture and C# ASP.NET Core and
              Java. Integrated and cloud deployed application with Machine
              Learning Demand Forecasting for computerizing a Logistics WorkFlow
              for FYP.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2019</h3>
            <p>
              Graduated with Second Class Upper Honours in Bachelor Of Business
              Studies with specialization in Logistics and Supply Chain
              Management from UCD. Went to work and handled imports and exports
              for air,land and sea goods.
            </p>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  );
};

export default Experience;
