import styled from "styled-components";
import { useState } from "react";

const Tag = styled.div`
position: relative;
height: 100%;
:hover{
    cursor: help;
}
img{
    height: 100%;
    border-radius: 4px;
}
`
const Tooltip = styled.div<{ $isHovered: boolean }>`
visibility: hidden;
position: absolute;
left: -10px;
top: -36px;
padding: 4px 9px;
border-radius: 5px;
background-color: #ece7e5;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
font-weight: 600;

::before {
    content: "";
    position: absolute;
    margin-top: 19px;
    margin-left: 3.5px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid $colors-secondary-button;
}

${props => props.$isHovered && `visibility: visible;`}
`

function TechnoIcon({ name }: { name: string }) {

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseOver() {
        setIsHovered(true);
    };

    function handleMouseLeave() {
        setIsHovered(false);
    };

    const image = require(`../../images/technologies/${name}.png`);

    return (
        <Tag onMouseLeave={() => handleMouseLeave()} onMouseOver={() => handleMouseOver()}>
            <img src={image.default.src} alt={name} />
            <Tooltip $isHovered={isHovered}>{name}</Tooltip>
        </Tag>
    );
}

export default TechnoIcon;