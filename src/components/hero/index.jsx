import "./index.scss";
import HeroImage from "../hero_image";
import Button from "../button/index";

function Hero() {
    return (
        <section className="hero_section">
            <div className="hero__left">
                <header className="hero_text">
                    <h1 className="hero_title">Intégrateur Web</h1>
                    <h2 className="hero_name">Maxence Lesage</h2>
                    <p className="hero_catch">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquid hic laborum sint, doloremque sapiente doloribus inventore aspernatur!</p>
                </header>
                <div className="hero_links">
                    <Button key="btn-contact" value="Contact" type="btn_primary" />
                    <Button key="btn-projects" value="Mes Projets" type="btn_secondary" />
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