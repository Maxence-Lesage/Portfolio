import "./index.scss";
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import fiverr from "../../images/fiverr_logo.png";

function Footer() {
    return (
        <footer className="footer">
            <p>© Website created in React.js, repository <a href="https://github.com/Maxence-Lesage/Portfolio.git">here</a>.</p>
            <div className="social_media">
                <a href="https://www.youtube.com/@SleekSite">
                    <img src={youtube} alt="Logo of Youtube" />
                </a>
                <a href="https://www.instagram.com/sleeksiteen">
                    <img src={instagram} alt="Logo of Instagram" />
                </a>
                <a href="/">
                    <img src={fiverr} alt="Logo of Fiverr" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;