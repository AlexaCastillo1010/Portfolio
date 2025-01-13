import "../index.css";
import "./maincontent.css"
import alexpicture from "./image/alex.png";

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
            </div>
            <div className="mypicture">
                <img src={alexpicture} alt="Alex" />
            </div>
        </div>
    );
}
