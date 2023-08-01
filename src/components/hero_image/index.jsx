import "./index.scss";
import image from "../../images/photo.png";

function HeroImage() {
    return (
        <svg className="shape" viewBox="0 0 200 200">
            <mask id="maskShape">
                <path d="M60,8 Q140,0 182,33 Q220,70 200,188
                Q136,152 80,182 Q32,200 32,132
                Q-20,60 24,23 Q40,10 60,8"></path>
            </mask>
            <image href={image} className="maskShape_image" x="0" y="0" preserveAspectRatio="xMidYMid slice"></image>
        </svg>
    );
}

export default HeroImage;