import React, { Component } from "react";

class Clubs extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <li key={this.props.id}><img src={this.props.profile} /> {this.props.name}</li>
    )
  }
}


export default Clubs
