import React from "react";
import PropTypes from 'prop-types';
import "./Details.css";

var moment = require("moment");
moment().format();

const Details = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.profile} alt={props.lastname}/>
      <h2>{props.firstname} {props.lastname}</h2>
      <p>Sex: {props.sex !== "M"
          ? "Female"
          : "Male"}</p>
      <p>Weight: {props.weight + "kg"}</p>
      <p>From: {props.city}, {props.state}</p>
      <p>Member since: {moment(props.created_at).format('MMMM YYYY')}</p>
    </div>
  )
}

Details.Details = {
  profile: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  sex: PropTypes.string,
  weight: PropTypes.number,
  city: PropTypes.string,
  state: PropTypes.string,
  created_at: PropTypes.string
};

export default Details
