import React from "react";
import { ILaunch } from "../schemas/launchSchema";

const LaunchCard: React.FunctionComponent<IProps> = ({ launch }) => {

    return (
        <div className="card"><img src={launch.links?.patch?.small} />
            <div className="cardInfo">
                <h2>{launch.name}</h2>
                <h4>{launch.rocket}</h4>
                <h4>Launch Status: {launch.success === true ? `Success` :
                    launch.success === false ? `Fail` : `-`}</h4>
                <div className="cardDetails" title={launch.details ? launch.details : ""}>
                    <p>{launch.details}</p>
                </div>
            </div>
        </div>
    )
}

export default LaunchCard;

interface IProps {
    launch: ILaunch;
}