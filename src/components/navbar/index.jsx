import "./index.scss";
import NavCircle from "../navcircle/index";
import Button from "../../components/button/index";
import { useRef } from "react";

function Navbar() {

    const refBurger = useRef(null);
    const refLinks = useRef(null);

    function handleClick() {
        refBurger.current.classList.toggle("navbar_burger_active");
        refLinks.current.classList.toggle("burger_navbar");
    }

    return (
        <nav id="navbar">

            <div className="navbar__wrapper_left">
                <NavCircle />
                <a className="navbar_title heading" href="#navbar">
                    <p>Maxence</p>
                    <p>Lesage</p>
                </a>
            </div>

            <div className="navbar__wrapper_right" ref={refLinks}>
                <div className="navbar_links">
                    <a className="heading" href="#projects">
                        <p>Projets</p>
                    </a>
                    <div className="separator" />
                    <a className="heading" href="#skills">
                        <p>Compétences</p>
                    </a>
                    <div className="separator" />
                    <Button value="Contact" type="btn_secondary" stretch="btn_stretch" />
                </div>
            </div>

            <button className="navbar_burger" ref={refBurger} onClick={handleClick}>
                <div className="burger_line" />
                <div className="burger_line" />
                <div className="burger_line" />
            </button>
        </nav>
    );
}

export default Navbar;