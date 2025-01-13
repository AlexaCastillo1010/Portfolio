import "../index.css"
import "./css/projects.css";
import codecraftimg from "./image/codecraftimg.png"
import carimg from "./image/car.png"
import coffeeimg from "./image/coffee.png"
export default function Projects(){
    return(
        <div className="projects">
            <div className="codecraft">
                <img src={codecraftimg} alt="" />
            </div>
            <div className="latestprojects">
                <h1 className="latest">Latest <br />Projects</h1>
                <img src={carimg} alt="" />
                <img src={coffeeimg} alt="" />
            </div>
        </div>
    );
}