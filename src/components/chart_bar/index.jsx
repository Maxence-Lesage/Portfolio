import TechnoIcon from "../techno_icon";
import "./index.scss";

function ChartBar(props) {

    const fill = props.value * 5;

    return (
        <div className="chart_bar">
            <TechnoIcon name={props.name} />
            <svg id="chart_bar_svg" xmlns="http://www.w3.org/2000/svg">
                <rect className="chart_empty" width="500" height="19" />
                <rect className="chart_filled" width={fill} height="15" y="2" />
            </svg>
            <p className="percentage">{`${props.value}%`}</p>
        </div>
    );
}

export default ChartBar;