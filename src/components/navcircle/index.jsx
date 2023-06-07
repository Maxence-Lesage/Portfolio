import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function NavCircle() {
    return (
        <div className="navbar_circle">
            <FontAwesomeIcon className="navbar_circle_icon" icon={faCode} />
        </div>
    );
}

export default NavCircle;