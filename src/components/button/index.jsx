import "./index.scss";

function Button(props) {

    const value = props.value;
    const type = props.type;
    const stretch = props.stretch;

    const handleOnClick = () => {
        if (value === "Contact") {
            document.getElementById("contact_modal").classList.toggle("contact_modal_open");
            document.getElementById("contact_modal_background").classList.toggle("contact_modal_open");
        }
    }

    return (
        <input className={"button " + type + " " + stretch} type="button" value={value} onClick={handleOnClick} />
    );
}

export default Button;