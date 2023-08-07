import "./index.scss";
import HeroImage from "../../components/hero_image";
import Button from "../../components/button/index";

function Hero() {
    return (
        <section className="hero_section">
            <div className="hero__left">
                <header className="hero_text">
                    <h1 className="hero_title">Web Developer</h1>
                    <h2 className="hero_name">Maxence Lesage</h2>
                    <p className="hero_catch">
                        Passionate about programming, I will design your website with meticulous attention to detail.
                        I will devote all my focus to performance and user fluidity to bring out the full potential of your project.
                    </p>
                </header>
                <div className="hero_links">
                    <Button key="btn-contact" value="Contact" type="btn_primary" />
                    <a href="#projects"><Button key="btn-projects" value="My Projects" type="btn_secondary" /></a>
                </div>
                <div className="hero_pattern">

                </div>
            </div>
            <div className="hero__right">
                <HeroImage />
            </div>
        </section>
    );
}

export default Hero;