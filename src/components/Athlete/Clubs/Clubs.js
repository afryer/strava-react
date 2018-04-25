import React from "react";
import "./clubs.css";

const Clubs = ( props ) => {
  return <li key={props.id}>
      <a href={"https://www.strava.com/clubs/" + props.url} target="_blank">
        <img src={props.profile_medium} alt={props.name} className="club-list__img" /> {props.name}
      </a>
    </li>;
}

export default Clubs
