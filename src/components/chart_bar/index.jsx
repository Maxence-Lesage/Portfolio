import TechnoIcon from "../techno_icon";
import "./index.scss";

function ChartBar(props) {

    const fill = props.value * props.multiplier;

    return (
        <div className="chart_bar">
            <div className="chart_bar_name">
                <TechnoIcon name={props.name} />
            </div>
            <svg id="chart_bar_svg" xmlns="http://www.w3.org/2000/svg">
                <rect className="chart_empty" width={props.width} height="19" />
                <rect className="chart_filled" width={fill} height="15" y="2" />
            </svg>
            <p className="percentage">{`${props.value}%`}</p>
        </div>
    );
}

export default ChartBar;