import "./index.scss";
import Button from "../../components/button/index";
import { useRef } from "react";
import logo from "../../images/logo_navbar.svg";
import { Link } from "react-router-dom";

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
                <Link to="/">
                    <img src={logo} alt="Logo of SleekSite.store" />
                </Link>
            </div>

            <div className="navbar__wrapper_right" ref={refLinks}>
                <div className="navbar_links">
                    <a className="heading" href="#projects">
                        <p>Projects</p>
                    </a>
                    <div className="separator" />
                    <a className="heading" href="#skills">
                        <p>Skills</p>
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