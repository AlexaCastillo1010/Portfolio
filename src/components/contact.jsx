import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import "./css/contact.css";
import linkedin from "./image/linkedin.png";
import githubimg from "./image/github.png";
import gmailimg from "./image/gmail.png";

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const socialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (socialRef.current) {
      observer.observe(socialRef.current);
    }

    return () => {
      if (socialRef.current) {
        observer.unobserve(socialRef.current);
      }
    };
  }, []);

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact">
      <div className="getinTouch">
        <h1 className="get">Get in Touch With me</h1>
        <h1 className="iwouldbe">
          I would be honored to discuss how I can be an asset to your team and
          further enhance my knowledge and expertise through working with you.
        </h1>
      </div>
      <div
        className={`social ${animate ? "animate" : ""}`}
        ref={socialRef}
      >
        <div className="linkedin">
          <img className="linkedimg" src={linkedin} alt="" />
          <h1>Alexandria Castillo</h1>
          <button
            className="check"
            onClick={() => handleButtonClick("https://www.linkedin.com/in/alexandria-castillo-353409347/")}
          >
            Check me Out!
          </button>
        </div>
        <div className="github">
          <img className="githubimg" src={githubimg} alt="" />
          <h1>AlexaCastillo1010</h1>
          <button
            className="check"
            onClick={() => handleButtonClick("https://github.com/AlexaCastillo1010")}
          >
            Check me Out!
          </button>
        </div>
        <div className="gmail">
          <img className="gmailimg" src={gmailimg} alt="" />
          <h1 className="gmailalex">alexandriacastillo657@gmail.com</h1>
          <button
            className="check"
            onClick={() => handleButtonClick("mailto:alexandriacastillo657@gmail.com")}
          >
            Mail me
          </button>
        </div>
      </div>
    </div>
  );
}
