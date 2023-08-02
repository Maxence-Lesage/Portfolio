import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
                <div className="contact_modal_title">Contact</div>
                <FontAwesomeIcon icon={faXmark} className="contact_modal_close_icon" onClick={handleOnClick} />
            </div>
        </>
    );
}

export default Modal;