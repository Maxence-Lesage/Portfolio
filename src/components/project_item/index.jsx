import TechnoIconList from "../techno_icon_list/index";
import "./index.scss";

function ProjectItem(props) {
    const name = props.data.name;
    const desc = props.data.desc;
    const tags = props.data.tag;
    const imageName = props.data.image;
    const image = require(`../../images/${imageName}`);

    return (
        <article className="project_item">
            <img className="pi_image" src={image} alt={name} />
            <div className="pi_bottom">
                <h3 className="pi_name">{name}</h3>
                <p className="pi_desc">{desc}</p>
                <TechnoIconList tags={tags} />
            </div>
        </article>
    );
}

export default ProjectItem;