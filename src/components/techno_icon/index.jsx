import { useState } from "react";
import "./index.scss";

function TechnoIcon({ name }) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseOver() {
        setIsHovered(true);
    };

    function handleMouseLeave() {
        setIsHovered(false);
    };

    const image = require(`../../images/technologies/${name}.png`);

    return (
        <div className="tag"
            onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <img src={image} alt={name} />
            <div className={`tooltip ${isHovered ? "tooltip_visible" : ""}`}>{name}</div>
        </div>
    );
}

export default TechnoIcon;