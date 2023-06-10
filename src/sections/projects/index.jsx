import ProjectItem from "../../components/project_item";
import "./index.scss";
import { projects_data } from "../../utils/fetch";

function Projects() {

    const data = projects_data();
    const projects_list = data.map(value => {
        return <ProjectItem key={value.id} data={value} />;
    });

    return (
        <section id="projects" className="projects">
            <div className="projects_list">
                {projects_list}
            </div>
            <h2 className="section_header">Projets</h2>
        </section>
    );
}

export default Projects;