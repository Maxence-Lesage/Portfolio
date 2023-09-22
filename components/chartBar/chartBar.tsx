import styled from "styled-components";
import TechnoIcon from "../technoIcon/technoIcon";

const ChartBarDiv = styled.div`
display: flex;
gap: 6px;
width: 100%;
`

const ChartBarSVG = styled.svg`
    width: 500px;
    height: 19px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px;

    @media screen and (max-width: 700px) {
        width: 300px;
    }

    @media screen and (max-width: 440px) {
        width: 200px;
    }
`

const ChartBarEmpty = styled.rect`
fill: #ece7e5;
`

const ChartBarFilled = styled.rect`
fill: #713336;
`

const Percentage = styled.p`
font-weight: 500;
margin-left: 3px;
margin-top: 2px;
`

const ChartBarName = styled.div`
height: 20px;
`

const ChartBarReflect = styled.ellipse`
fill: rgba(255, 255, 255, 0.15);
`

function ChartBar({ name, value, multiplier, width }: { name: string, value: string, multiplier: number, width: number }) {

    const fill = parseInt(value) * multiplier;

    return (
        <ChartBarDiv>
            <ChartBarName>
                <TechnoIcon name={name} />
            </ChartBarName>
            <ChartBarSVG id="chart_bar_svg" xmlns="http://www.w3.org/2000/svg">
                <ChartBarEmpty width={width} height="19" />
                <ChartBarFilled width={fill} height="15" y="2" />
                <ChartBarReflect cx="20" cy="0" rx={fill} ry="8" />
            </ChartBarSVG>
            <Percentage>{`${value}%`}</Percentage>
        </ChartBarDiv>
    );
}

export default ChartBar;