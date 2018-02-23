import React from "react";

const Clubs = ( props ) => {
  return (
    <li key={props.id}><img src={props.profile} alt={props.name} /> {props.name}</li>
  )
}

export default Clubs
