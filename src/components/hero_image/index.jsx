import "./index.scss";
import image from "../../images/hero-placeholder.png";

function HeroImage() {

    //30% 0, 91% 6%, 100% 35%, 100% 94%, 68% 81%, 40% 91%,
    //11 % 80 %, 21 % 56 %, 5 % 34 %, 12 % 14 %
    return (
        <svg className="shape" viewBox="0 0 200 200">
            <mask id="maskShape">
                <path d="M60,8 Q140,0 182,33 Q220,70 200,188
                Q136,152 80,182 Q32,200 32,132
                Q-20,60 24,23 Q40,10 60,8"></path>
            </mask>
            <image href={image} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#maskShape)"></image>
        </svg>
    );
}

export default HeroImage;