import React from "react";

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


export default Activity