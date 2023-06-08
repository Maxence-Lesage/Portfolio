import "./index.scss";
import HeroImage from "../hero_image";

function Hero() {
    return (
        <section className="hero_section">
            <div className="hero__left">

            </div>
            <div className="hero__right">
                <HeroImage />
            </div>
        </section>
    );
}

export default Hero;