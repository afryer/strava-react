import React from "react";
import PropTypes from 'prop-types';
import "./clubs.css";

const Clubs = ( props ) => {
  return <li key={props.id}>
      <a href={"https://www.strava.com/clubs/" + props.url} target="_blank">
        <img src={props.profile_medium} alt={props.name} className="club-list__img" /> {props.name}
      </a>
    </li>;
}

Clubs.propTypes = {
  url: PropTypes.string,
  profile_medium : PropTypes.string,
  name : PropTypes.string
};

export default Clubs
