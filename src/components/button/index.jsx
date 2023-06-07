import "./index.scss";

function Button(props) {

    return (
        <input className="button" type="button" value={props.value} />
    );
}

export default Button;