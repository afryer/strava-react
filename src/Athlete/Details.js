import React from "react";
//TODO use moment corretly to format dates 
var moment = require("moment");
moment().format();

const Details = ( props ) => {
  return (
    <div>
      <h2>{props.firstname} {props.lastname}</h2>
      <p>Sex: {props.sex === "M" ? "Male" : "Female"}</p>
      <p>Weight: {props.weight + "kg"}</p>
      <p>From: {props.city}, {props.state}</p>
      <p>Member since: {moment(props.created_at).format('MMMM YYYY')}</p>
    </div >
  )
}



export default Details
