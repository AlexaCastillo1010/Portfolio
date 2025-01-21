import React, { useEffect, useRef } from "react";
import reactimg from "./image/reactimg.png";
import reduximg from "./image/redux.png";
import htmlimg from "./image/html.png";
import mongoimg from "./image/mongodb.png";
import nodeimg from "./image/node.png";
import phpimg from "./image/php.png";
import expressimg from "./image/express.png";
import jsimg from "./image/js.png";
import cssimg from "./image/css3.png";
import "./css/techstack.css";

export default function Techstack() {
    const rowsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        rowsRef.current.forEach((row) => {
            if (row) {
                observer.observe(row);
            }
        });

        return () => {
            rowsRef.current.forEach((row) => {
                if (row) {
                    observer.unobserve(row);
                }
            });
        };
    }, []);

    return (
        <div className="techstack">
            <h1 className="my">My Tech Stack</h1>
            <div className="firstrow hidden" ref={(el) => (rowsRef.current[0] = el)}>
                <div className="react">
                    <img src={reactimg} alt="React" />
                </div>
                <div className="redux">
                    <img src={reduximg} alt="Redux" />
                </div>
                <div className="html">
                    <img src={htmlimg} alt="HTML" />
                </div>
            </div>
            <div className="secondrow hidden" ref={(el) => (rowsRef.current[1] = el)}>
                <div className="mongodb">
                    <img src={mongoimg} alt="MongoDB" />
                </div>
                <div className="nodejs">
                    <img src={nodeimg} alt="Node.js" />
                </div>
                <div className="php">
                    <img src={phpimg} alt="PHP" />
                </div>
            </div>
            <div className="thirdrow hidden" ref={(el) => (rowsRef.current[2] = el)}>
                <div className="express">
                    <img src={expressimg} alt="Express" />
                </div>
                <div className="js">
                    <img src={jsimg} alt="JavaScript" />
                </div>
                <div className="css">
                    <img src={cssimg} alt="CSS" />
                </div>
            </div>
        </div>
    );
}
