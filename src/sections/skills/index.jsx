import "./index.scss";
import oc_logo from "../../images/oc_logo.jpg"
import { Link } from "react-router-dom";
import ChartBar from "../../components/chart_bar";
import { useState } from "react";
import json from "../../technologies.json";

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

    const technologies = json.technologies;

    const chartList = technologies.map((technology) => {
        return (
            <ChartBar key={technology.name} name={technology.name} value={technology.progress} width={getWidth} multiplier={multiplier} />
        );
    });

    return (
        <section id="skills">
            <h2 className="section_header">Skills</h2>
            <div className="certificate">
                <Link to={"https://openclassrooms.com/fr/paths/594-integrateur-web"}>
                    <img className="oc_logo" src={oc_logo} alt="Logo of Openclassrooms" />
                </Link>
                <div className="certificate_text">
                    <p>Graduated on __/__/2023</p>
                    <p>Web Integrator's course</p>
                </div>
            </div>
            <div className="skills_left">
                <div className="chart_list_border" />
                <div className="chart_list">
                    {chartList}
                </div>
            </div>
        </section>
    );
}

export default Skills;