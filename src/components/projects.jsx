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
        <div className="image-container relative group">
          <a
            href="https://codecrafts.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={codecraftimg}
              alt="CodeCraft Project"
              className="transition-opacity duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Visit CodeCraft
            </div>
          </a>
          <span>CodeCraft</span>
        </div>
      </div>
      <div className="latestprojects">
        <h1 className="latest animate-on-scroll">
          Latest <br />
          <span className="font-bold">Projects</span>
        </h1>
        <div className="image-container animate-on-scroll relative group">
          <a
            href="https://github.com/AlexaCastillo1010/CarRental.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={carimg}
              alt="Car Rental"
              className="transition-opacity duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Car Rental
            </div>
          </a>
          <span>Car Rental</span>
        </div>
        <div className="image-container animate-on-scroll relative group">
          <a
            href="https://github.com/AlexaCastillo1010/CoffeeVerse.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={coffeeimg}
              alt="Coffee Shop"
              className="transition-opacity duration-300 group-hover:opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Coffee Shop
            </div>
          </a>
          <span>Coffee Shop</span>
        </div>
      </div>
    </div>
  );
}
