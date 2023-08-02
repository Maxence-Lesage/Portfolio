import "./index.scss";
import oc_logo from "../../images/oc_logo.jpg"
import { Link } from "react-router-dom";
import ChartBar from "../../components/chart_bar";
import { useState } from "react";

function Skills() {

    const [getWidth, setWidth] = useState(500);

    function updateSize() {
        const newWidth = window.innerWidth;
        if (newWidth > 700 && getWidth !== 500) {
            setWidth(500);
        } else if (newWidth < 700 && newWidth > 440 && getWidth !== 300) {
            setWidth(300);
        } else if (newWidth < 440 && getWidth !== 200) {
            setWidth(200);
        }
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    const multiplier = getWidth / 100;

    return (
        <section id="skills">
            <h2 className="section_header">Compétences</h2>
            <div className="certificate">
                <Link to={"https://openclassrooms.com/fr/paths/594-integrateur-web"}>
                    <img className="oc_logo" src={oc_logo} alt="Logo d'Openclassrooms" />
                </Link>
                <div className="certificate_text">
                    <p>Diplomé le __/__/2023</p>
                    <p>Parcours Intégrateur Web</p>
                </div>
            </div>
            <div className="skills_left">
                <div className="chart_list_border" />
                <div className="chart_list">
                    <ChartBar key="HTML" name="HTML" value="88" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="CSS" name="CSS" value="75" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Javascript" name="Javascript" value="60" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Sass" name="Sass" value="35" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="React" name="React" value="80" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Redux" name="Redux" value="50" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="SEO" name="SEO" value="40" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Jest" name="Jest" value="40" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Next" name="Next" value="60" width={getWidth} multiplier={multiplier} />
                    <ChartBar key="Typescript" name="Typescript" value="55" width={getWidth} multiplier={multiplier} />
                </div>
            </div>
        </section>
    );
}

export default Skills;