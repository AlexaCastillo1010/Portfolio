import "../index.css";
import "./css/aboutskills.css";

export default function AboutSkills() {
    return (
        <div className="aboutskills">
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
                {/* Download Button */}
                <button 
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = './Ma. Alexandria Castillo Intern.pdf';
                        link.download = 'Ma. Alexandria Castillo Intern.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                    className="download"
                >
                    DOWNLOAD MY RESUME
                </button>
                <p className="iam">
                    I am a fourth-year Business Analytics student at Batangas State University - JPLPC Malvar and a self-taught programmer with four years of experience, mainly in web development. I also have a background in creating Windows applications and enjoy exploring new technologies to enhance my skills.
                </p>
            </div>
        </div>
    );
}
