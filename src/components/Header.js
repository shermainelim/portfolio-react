import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Web and Mobile Development</h1>
        <Typed
          className="typed-text"
          strings={[
            "React.js",
            "React Native",
            "Spring Boot Java",
            "C# ASP.NET Core",
            "Python and Machine Learning",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a hred="#" className="btn-main-offer">
          <Link smooth={true} to="contacts" offset={-110} className="nav-link">
            Contact Me
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Header;
