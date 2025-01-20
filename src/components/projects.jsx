import { useEffect } from "react";
import "../index.css";
import "./css/projects.css";
import codecraftimg from "./image/codecraftimg.png";
import carimg from "./image/car.png";
import coffeeimg from "./image/coffee.png";

export default function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="projects">
      <div className="codecraft animate-on-scroll">
        <div className="image-container">
          <img src={codecraftimg} alt="CodeCraft Project" />
          <span>CodeCraft</span>
        </div>
      </div>
      <div className="latestprojects">
        <h1 className="latest animate-on-scroll">
          Latest <br />
          <span className="font-bold">Projects</span>
        </h1>
        <div className="image-container animate-on-scroll">
          <img src={carimg} alt="Car Rental" />
          <span>Car Rental</span>
        </div>
        <div className="image-container animate-on-scroll">
          <img src={coffeeimg} alt="Coffee Shop" />
          <span>Coffee Shop</span>
        </div>
      </div>
    </div>
  );
}
