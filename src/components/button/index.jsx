import "./index.scss";

function Button(props) {

    const value = props.value;
    const type = props.type;
    const stretch = props.stretch;

    return (
        <input className={"button " + type + " " + stretch} type="button" value={value} />
    );
}

export default Button;