import React, { Component } from "react";

class Clubs extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    console.log(this.props)
  }

  render() {
    return (
      <li key={this.props.id}><img src={this.props.profile} alt={this.props.name} /> {this.props.name}</li>
    )
  }
}


export default Clubs
