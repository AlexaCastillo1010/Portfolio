import "../index.css"
import "./css/projects.css";
import codecraftimg from "./image/codecraftimg.png"
import carimg from "./image/car.png"
import coffeeimg from "./image/coffee.png"
export default function Projects() {
    return (
      <div className="projects">
        <div className="codecraft">
          <div className="image-container">
            <img src={codecraftimg} alt="CodeCraft Project" />
            <span>CodeCraft</span>
          </div>
        </div>
        <div className="latestprojects">
          <h1 className="latest">
            Latest <br />
            <span className="font-bold">Projects</span>
          </h1>
          <div className="image-container">
            <img src={carimg} alt="Car Rental" />
            <span>Car Rental</span>
          </div>
          <div className="image-container">
            <img src={coffeeimg} alt="Coffee Shop" />
            <span>Coffee Shop</span>
          </div>
        </div>
      </div>
    );
  }
  