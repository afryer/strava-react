import React from "react";
import PropTypes from 'prop-types';


const Activity = ( props ) => {
  return (
    <tr key={props.id}>
      <td>
        <a href={"https://www.strava.com/activities/" + props.id}>
          {props.name}
        </a>
      </td>
      <td>{props.kudos_count}</td>
      <td>{props.distance / 1000}km</td>
      <td>{props.suffer_score}</td>
      <td>{props.max_heartrate}</td>
      <td>{props.type}</td>
      <td>{props.total_elevation_gain}</td>
    </tr>
  )
}

Activity.propTypes = {
  kudos_count : PropTypes.number,
  distance: PropTypes.number,
  suffer_score : PropTypes.number,
  max_heartrate : PropTypes.number,
  total_elevation_gain : PropTypes.number,
  type : PropTypes.string,
};

export default Activity