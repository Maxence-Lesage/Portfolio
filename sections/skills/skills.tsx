import styled from 'styled-components';
import { useState } from "react";
import Link from 'next/link';
import oc_logo from "@/images/oc_logo.jpg"
import ChartBar from "@/components/chartBar/chartBar";
import json from "@/technologies.json";

const SkillsSection = styled.section`
    position: relative;
    padding: 150px 0px 300px 0px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
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

const Certificate = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    right: 0;
    top: 150px;

    & p {
        font-size: 16px;
        font-weight: 500;
    }

    @media screen and (max-width: 1000px) {
        position: initial;
        margin-bottom: 70px;
        align-items: flex-start;
        flex-direction: row;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

const OcLogo = styled.img`
    height: 100px;
    border-radius: 60px 0px 0px 60px;

    @media screen and (max-width: 1000px) {
        border-radius: 0px 60px 60px 0px;
        margin-right: 40px;
    }
`

const CertificateText = styled.div`
    line-height: 1.5;

    @media screen and (min-width: 1000px) {
        margin-left: 160px;
        font-size: 20px;
        text-align: end;
        white-space: nowrap;
    }
    
    @media screen and (max-width: 1000px) {
        margin-left: 0;
        text-align: start;
        margin-top: 18px;
    }
`

const SkillsLeft = styled.div`
    display: flex;
`

const ChartListBorder = styled.div`
    border-left: 2px solid rgba(0, 0, 0, 0.151);
    padding-right: 25px;

    @media screen and (max-width: 440px) {
        display: none;
    }
`

const ChartList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`

function Skills() {

    const [getWidth, setWidth] = useState(500);

    function updateSize() {
        if (typeof window === "undefined") return;
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
    if (typeof window !== "undefined") {
        window.addEventListener("resize", updateSize);
    }
    const multiplier = getWidth / 100;

    const technologies = json.technologies;

    const chartList = technologies.map((technology) => {
        return (
            <ChartBar key={technology.name} name={technology.name} value={technology.progress} width={getWidth} multiplier={multiplier} />
        );
    });

    return (
        <SkillsSection id="skills">
            <SectionHeader>Compétences</SectionHeader>
            <Certificate>
                <Link href={"https://openclassrooms.com/fr/paths/594-integrateur-web"}>
                    <OcLogo src={oc_logo.src} alt="Logo of Openclassrooms" />
                </Link>
                <CertificateText>
                    <p>Diplomé le 07/09/2023</p>
                    <p>Parcours Intégrateur Web</p>
                </CertificateText>
            </Certificate>
            <SkillsLeft>
                <ChartListBorder />
                <ChartList>
                    {chartList}
                </ChartList>
            </SkillsLeft>
        </SkillsSection>
    );
}

export default Skills;