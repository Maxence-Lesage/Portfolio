import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import TechnoIconList from "../techno_icon_list/index";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

function ProjectItem(props) {

    const cardRef = useRef(null);

    const name = props.data.name;
    const desc = props.data.desc;
    const tags = props.data.tag;
    const imageName = props.data.image;
    const image = require(`../../images/${imageName}`);

    function flipCard() {
        const card = cardRef.current;
        card.classList.toggle('flip');
    }

    return (
        <article className="project_card" ref={cardRef}>
            <div className="card_front">
                <img className="pi_image" src={image} alt={name} />
                <div className="pi_bottom">
                    <h3 className="pi_name">{name}</h3>
                    <p className="pi_desc">{desc}</p>
                    <div className="pi_flex">
                        <TechnoIconList tags={tags} />
                        <button className="flip_button" onClick={flipCard}>
                            <FontAwesomeIcon icon={faRotateLeft} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card_back">
                <div className="card_back_wrapper">
                    <p className="pi_desc_full">{desc}</p>
                    <button className="flip_button" onClick={flipCard}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProjectItem;