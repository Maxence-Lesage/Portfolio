import "./index.scss";
import oc_logo from "../../images/oc_logo.jpg"
import { Link } from "react-router-dom";
import ChartBar from "../../components/chart_bar";

function Skills() {

    return (
        <section id="skills">
            <h2 className="section_header">Compétences</h2>
            <div className="certificate">
                <Link to={"https://openclassrooms.com/fr/paths/594-integrateur-web"}>
                    <img className="oc_logo" src={oc_logo} alt="Logo d'Openclassrooms" />
                </Link>
                <p>Diplomé le __/__/2023</p>
                <p>Parcours Intégrateur Web</p>
            </div>
            <div className="skills_left">
                <div className="chart_list_border" />
                <div className="chart_list">
                    <ChartBar key="HTML" name="HTML" value="77" />
                    <ChartBar key="CSS" name="CSS" value="62" />
                    <ChartBar key="Javascript" name="Javascript" value="44" />
                    <ChartBar key="Sass" name="Sass" value="15" />
                    <ChartBar key="React" name="React" value="38" />
                    <ChartBar key="Redux" name="Redux" value="24" />
                    <ChartBar key="SEO" name="SEO" value="55" />
                    <ChartBar key="Jest" name="Jest" value="23" />
                    <ChartBar key="Next" name="Next" value="0" />
                    <ChartBar key="Typescript" name="Typescript" value="10" />
                </div>
            </div>
        </section>
    );
}

export default Skills;