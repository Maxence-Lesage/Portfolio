import "./index.scss";
import image from "../../images/photo.jpg";

function HeroImage() {
    return (
        <svg className="shape" viewBox="0 0 200 200">
            <mask id="maskShape">
                <path d="M60,8 Q140,0 175,30 Q213,60 200,185
                Q136,152 80,182 Q28,195 22,122
                Q-20,55 22,23 Q40,10 60,8"></path>
            </mask>
            <image href={image} className="maskShape_image" x="0" y="0" preserveAspectRatio="xMidYMid slice"></image>
        </svg>
    );
}

export default HeroImage;