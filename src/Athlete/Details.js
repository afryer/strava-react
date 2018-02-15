import React, { Component } from "react";
//TODO use moment corretly to format dates 
var moment = require("moment");
moment().format();

class Details extends Component {

  constructor(props){
    super(props);
    this.state = {
      clubs: null
    }
  }

  componentDidUpdate() {
    console.log(this.props);
    // let info = this.props;
    // this.setState({info})
    // console.log(this.state)
    this.retrieveClubs();

  }

  retrieveClubs(props) {
    var clubArray = this.state.clubs;
    this.props.clubs.map(element => {
      console.log(element);
      <li>{element.id}</li>
    })

  }


  render() {
    return (
    <div>
        <h2>
          
          {this.props.firstname} {this.props.lastname}
        </h2>
        <p>Sex: {this.props.sex === "M" ? "Male" : "Female"}</p>
        <p>Weight: {this.props.weight + "kg"}</p>
        <p>
          From: {this.props.city}, {this.props.state}
        </p>
        <p>Member since: {moment( this.props.created_at ).format('MMMM YYYY')}</p>
      
      </div>
      )
  }
}

export default Details
