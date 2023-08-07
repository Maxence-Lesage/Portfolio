import "./index.scss";
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import fiverr from "../../images/fiverr_logo.png";

function Footer() {
    return (
        <footer className="footer">
            <p>© Site créé en React.js, repository <a href="https://github.com/Maxence-Lesage/Portfolio.git">à cette adresse</a>.</p>
            <div className="social_media">
                <a href="https://www.youtube.com/@SleekSite">
                    <img src={youtube} alt="Logo de Youtube" />
                </a>
                <a href="https://www.instagram.com/sleeksiteen">
                    <img src={instagram} alt="Logo d'Instagram" />
                </a>
                <a href="/">
                    <img src={fiverr} alt="Logo de Fiverr" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;