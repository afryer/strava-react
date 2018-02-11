import React, { Component } from "react";
import axios from 'axios';

class Strava extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.strava.com/api/v3/athletes/663067/activities?access_token=76b4ec0f6143822d5f5d33a42fc554daa5f9f82d"
      )
      .then(response => {
        console.log(response);
        const activities = response.data;
        this.setState({ activities });
      });
  }

  render() {
    return <div>console.log(this.state.activities)</div>;
  }
}

export default Strava