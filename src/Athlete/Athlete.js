import React, { Component } from "react";
import axios from 'axios';

class Athlete extends Component {
  constructor(props){
    super(props);
    this.state = {
      athlete: []
    }
  }

  componentDidMount() {
    axios
      .get("https://www.strava.com/api/v3/athletes/663067", {
        params: {
          access_token: "76b4ec0f6143822d5f5d33a42fc554daa5f9f82d"
        }
      })
      .then(response => {
        const athlete = response.data;
        this.setState({ athlete });
      });
  }
  
  render() {
    return <p>{ this.state.athlete.firstname } {this.state.athlete.lastname}</p>
  }

}

export default Athlete