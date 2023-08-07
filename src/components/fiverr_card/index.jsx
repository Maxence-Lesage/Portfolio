import "./index.scss"
import logo from "../../images/fiverr_logo.png";

function FiverrCard() {
    return (
        <div className="fiverr_card">
            <div className="fiverr_card_left">
                <img src={logo} alt="Fiverr website logo" />
            </div>
            <div className="fiverr_card_right">
                <div className="fiverr_card_right_top">
                    Coming soon
                </div>
                <div className="fiverr_card_right_bottom">
                    Coming soon
                </div>
            </div>
        </div>
    )
}

export default FiverrCard;