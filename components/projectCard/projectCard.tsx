import styled from "styled-components";
import TechnoIconList from "../technoList/technoList";
import { useState } from "react";
import github_logo from "../../images/github.jpg";

const ProjectCard = styled.article<{ $flip: boolean }>`
background-color: rgb(235, 235, 235);
    padding: 8px;
    border-radius: 10px;
    max-width: 250px;
    height: 280px;
    perspective: 100px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    margin: 0 auto;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
    transform: ${props => props.$flip ? "rotateY(180deg)" : "rotateY(0deg)"};
`

const PiImage = styled.img`
width: 100%;
height: 160px;
object-fit: cover;
border-radius: 6px;
`

const PiBottom = styled.div`
margin-top: 12px;
`

const PiName = styled.h3`
font-weight: 600;
font-size: 18px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
height: 25px;
`

const PiDesc = styled.p`
margin-top: 2px;
font-size: 16px;
height: 18px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`

const PiFlex = styled.div`
display: flex;
justify-content: space-between;
height: 26px;
margin-top: 25px;
`

const FlipButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
background: rgb(255, 255, 255);
border: 1px solid rgb(33, 33, 33);
letter-spacing: 1px;
border-radius: 4px;

&:hover {
    cursor: pointer;
}
`

const CardBack = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
transform: rotateY(180deg);
border-radius: 8px;
margin-left: -8px;
top: 0;
width: 100%;
height: 100%;
backface-visibility: hidden;
background-color: rgb(235, 235, 235);
`

const CardBackWrapper = styled.div`
position: relative;
width: calc(100% - 16px);
height: calc(100% - 16px);

${PiFlex} {
    position: absolute;
        right: 0;
        bottom: 9px;
        width: 100%;
        justify-content: space-between;
        img {
            border-radius: 5px;
            height: 100%;
        }
}

${PiName} {
    width: fit-content;
        margin: 0 auto;
        font-size: 22px;
        font-weight: 500;
}
`

const PiDescFull = styled.p`
font-size: 18px;
letter-spacing: .2px;
line-height: 1.2;
margin-top: 10px;
`

const PiNameSeparator = styled.div`
width: 85%;
margin: 5px auto;
height: 1px;
background-color: rgba(0, 0, 0, 0.3);
`

const CardFront = styled.div`
width: 100%;
height: 100%;
backface-visibility: hidden;
background-color: rgb(235, 235, 235);
`

interface dataProps {
    name: string,
    desc: string,
    tag: string[],
    image: string,
    link: string
}

function ProjectItem({ data }: { data: dataProps }) {

    const [flip, setFlip] = useState(false);

    const name = data.name;
    const desc = data.desc;
    const tags = data.tag;
    const imageName = data.image;
    const image = require(`../../images/projects-thumbnail/${imageName}`);
    const link = data.link;

    function flipCard() {
        setFlip(!flip);
    }

    return (
        <ProjectCard $flip={flip}>
            <CardFront>
                <a href={link}>
                    <PiImage src={image.default.src} alt={name + " website illustration"} />
                </a>
                <PiBottom>
                    <PiName>{name}</PiName>
                    <PiDesc>{desc}</PiDesc>
                    <PiFlex>
                        <TechnoIconList tags={tags} />
                        <FlipButton onClick={flipCard}>
                            <p>FLIP !</p>
                        </FlipButton>
                    </PiFlex>
                </PiBottom>
            </CardFront>
            <CardBack>
                <CardBackWrapper>
                    <PiName>{name}</PiName>
                    <PiNameSeparator />
                    <PiDescFull>{desc}</PiDescFull>
                    <PiFlex>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img className="github_logo" src={github_logo.src} alt="Logo of Github" />
                        </a>
                        <FlipButton onClick={flipCard}>
                            <p>FLIP !</p>
                        </FlipButton>
                    </PiFlex>
                </CardBackWrapper>
            </CardBack>
        </ProjectCard>
    );
}

export default ProjectItem;