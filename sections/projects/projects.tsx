import styled from "styled-components";
import ProjectItem from "@/components/projectCard/projectCard";
import { projects_data } from "@/utils/fetch";


const ProjectsSection = styled.section`
    position: relative;
    display: flex;
    justify-content: space-around;
    padding: 150px 0px 100px 0px;
`

const SectionHeader = styled.h2`
    position: absolute;
    top: 50px;
    left: 0;
    font-size: 32px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    padding-left: 10px;
    margin-left: -10px;
    pointer-events: none;
`

const ProjectsList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 50px;
`

export default function Projects() {

    const data = projects_data();
    const projects_list = data.map(value => {
        return <ProjectItem key={value.id} data={value} />;
    });

    return (
        <ProjectsSection id="projects">
            <SectionHeader>Projets</SectionHeader>
            <ProjectsList>
                {projects_list}
            </ProjectsList>
        </ProjectsSection>
    );
}