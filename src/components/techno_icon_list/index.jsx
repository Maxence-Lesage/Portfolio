import TechnoIcon from "../techno_icon";
import "./index.scss";

function TechnoIcons(props) {

    const tags = props.tags.map(tag => {
        return <TechnoIcon key={tag} name={tag} />
    });

    return (
        <div className="tags">
            {tags}
        </div>
    );
}

export default TechnoIcons;