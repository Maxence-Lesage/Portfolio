import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.scss";
import { faArrowRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import FiverrCard from "../fiverr_card";

function Modal() {

    const handleOnClick = () => {

        document.getElementById("contact_modal").classList.add("contact_modal_close");

        setTimeout(() => {
            document.getElementById("contact_modal").classList.remove("contact_modal_open");
            document.getElementById("contact_modal").classList.remove("contact_modal_close");
            document.getElementById("contact_modal_background").classList.remove("contact_modal_open");
        }, 300);
    }

    return (
        <>
            <div id="contact_modal_background" onClick={handleOnClick} />
            <div id="contact_modal">
                <div className="contact_modal_heading">
                    <h2 className="contact_modal_title">Contact</h2>
                    <FontAwesomeIcon icon={faXmark} className="contact_modal_close_icon" onClick={handleOnClick} />
                </div>
                <div className="contact_modal_content">
                    <h3 className="modal_content_heading">1. Passez commande directement depuis mon profil Fiverr <FontAwesomeIcon icon={faArrowRightLong} /></h3>
                    <FiverrCard />
                    <div className="modal_content_separator">OU</div>
                    <h3 className="modal_content_heading">2. Contactez moi directement par e-mail <FontAwesomeIcon icon={faArrowRightLong} /></h3>
                    <div className="modal_content_mail">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a className="modal_content_mail" href="mailto:contact@sleeksite.store">contact@sleeksite.store</a>
                    </div>
                </div>
                <div className="contact_modal_bottom" />
            </div>
        </>
    );
}

export default Modal;