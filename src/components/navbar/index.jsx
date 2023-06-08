import "./index.scss";
import NavCircle from "../navcircle/index";
import Button from "../../components/button/index";

function Navbar() {

    return (
        <nav id="navbar">

            <div className="navbar__wrapper_left">
                <NavCircle />
                <a className="navbar_title heading" href="#navbar">
                    <p>Maxence</p>
                    <p>Lesage</p>
                </a>
            </div>

            <div className="navbar__wrapper_right">
                <div className="navbar_links">
                    <a className="heading" href="#creations">
                        <p>Créations</p>
                    </a>
                    <div className="separator" />
                    <a className="heading" href="#competences">
                        <p>Compétences</p>
                    </a>
                    <div className="separator" />
                    <Button value="Contact" type="btn_secondary" stretch="btn_stretch" />
                </div>
            </div>

        </nav>
    );
}

export default Navbar;