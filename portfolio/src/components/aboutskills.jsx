import "../index.css";
import aboutbg from "./image/aboutskillsbg.png"
import "./css/aboutskills.css";


export default function AboutSkills() {
    return (
        <div className="aboutskills">
            <img className="bgabout" src= {aboutbg} alt="" />
            <div className="bothcontainer">
                <div className="rightskills">
                    <h1 className="alex">About my</h1>

                    <h1 className="skills">Skills</h1>
                </div>
                <div className="leftskills">
                    <div className="line"></div>
                </div>
            </div>
            <div className="aboutskillsdetails">
                <p className="iam">I am a fourth-year Business Analytics student at Batangas State University - JPLPC Malvar and a self-taught programmer with four years of experience, mainly in web development. I also have a background in creating Windows applications and enjoy exploring new technologies to enhance my skills.</p>
            </div>
          
           
        </div>
    );
}