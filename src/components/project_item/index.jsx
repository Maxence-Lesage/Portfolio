import TechnoIconList from "../techno_icon_list/index";
import "./index.scss";
import { useRef } from "react";
import github_logo from "../../images/github.jpg";

function ProjectItem(props) {

    const cardRef = useRef(null);

    const name = props.data.name;
    const desc = props.data.desc;
    const tags = props.data.tag;
    const imageName = props.data.image;
    const image = require(`../../images/${imageName}`);
    const link = props.data.link;

    function flipCard() {
        const card = cardRef.current;
        card.classList.toggle('flip');
    }

    return (
        <article className="project_card" ref={cardRef}>
            <div className="card_front">
                <a href={link}>
                    <img className="pi_image" src={image} alt={"Illustration du site : " + name} />
                </a>
                <div className="pi_bottom">
                    <h3 className="pi_name">{name}</h3>
                    <p className="pi_desc">{desc}</p>
                    <div className="pi_flex">
                        <TechnoIconList tags={tags} />
                        <button className="flip_button" onClick={flipCard}>
                            <p>FLIP !</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card_back">
                <div className="card_back_wrapper">
                    <h3 className="pi_name">{name}</h3>
                    <div className="pi_name_separator" />
                    <p className="pi_desc_full">{desc}</p>
                    <div className="pi_flex">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img className="github_logo" src={github_logo} alt="Logo de Github" />
                        </a>
                        <button className="flip_button" onClick={flipCard}>
                            <p>FLIP !</p>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectItem;