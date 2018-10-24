import React from "react";
import PropTypes from "prop-types";

const Stats = (props) => {
    console.log(props.recent_run_totals)
    return (
        <div>
            <h3>Recent Runs</h3>
            <ul>
                <li>Longest Ride {Math.round(props.biggest_ride_distance / 1000)}
                    km
                </li>
            </ul>
        </div>
    )
}

export default Stats;