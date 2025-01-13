import "../index.css";
import "./css/maincontent.css";
import alexpicture from "./image/alex.png";
import signature from "./image/signature.png"

export default function MainContent() {
    return (
        <div className="mainconent">
            
            <div className="myname">
                <div className="ma">
                <h1>Ma.</h1>
                </div>
                <div className="alexandria">
                <h1>Alexandria</h1>
                </div>
                <div className="castillo">
                    <h1>Castillo</h1>
                </div>
                <div className="detailsMainContent">
                    <h1>
                    Im a 4th year student <br />
                    Business Analytics Major of <br />
                    Batanagas State University JPLPC Malvar
                    </h1>
                </div>
                <div className="signature">
                    <img src={signature} alt="" />
                </div>
            </div>
            <div className="mypicture">
                <img src={alexpicture} alt="Alex" />
            </div>
        </div>
    );
}
