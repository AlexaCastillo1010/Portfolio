import reactimg from "./image/reactimg.png";
import reduximg from "./image/redux.png"
import htmlimg from "./image/html.png"
import mongoimg from "./image/mongodb.png"
import nodeimg from "./image/node.png"
import phpimg from "./image/php.png"
import expressimg from "./image/express.png"
import jsimg from "./image/js.png"
import cssimg from "./image/css3.png"
import "./css/techstack.css"
export default function Techstack() {
    return(
        <div className="techstack">
            <h1 className="my">My Tech Stack</h1>
            <div className="firstrow">
                <div className="react">
                    <img src={reactimg} alt="" />
                </div>
                <div className="redux">
                    <img src={reduximg} alt="" />
                </div>
                <div className="html">
                    <img src={htmlimg} alt="" />
                </div>
            </div>
            <div className="secondrow">
                <div className="mongodb">
                    <img src={mongoimg} alt="" />
                </div>
                <div className="nodejs">
                    <img src={nodeimg} alt="" />
                </div>
                <div className="php">
                    <img src={phpimg} alt="" />
                </div>
            </div>
            <div className="thirdrow">
                <div className="express">
                    <img src={expressimg} alt="" />
                </div>
                <div className="js">
                    <img src={jsimg} alt="" />
                </div>
                <div className="css">
                    <img src={cssimg} alt="" />
                </div>
            </div>
        </div>
    );
}