import React from "react";
import author from "../shermaine.JPG";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div classsName="photo-wrap">
            <img className="profile-img mb-5" src={author} alt="Author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Proactive team player who specializes mainly in frontend development
            using React.JS and React Native web and mobile development. Had
            prior experience in full stacks application development,
            deep/machine learning, iOS, Android mobile and web development.
            Delivers more than expected with optimization and suggestions on top
            of requirements. Currently studying Masters of Computer Science at
            Georgia Institute of Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
