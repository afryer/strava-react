import React, { Component } from "react";
import axios from 'axios';

class Activities extends Component {
  state = {
    activities: []
  }

  componentDidMount() {
    axios
      .get(
        "https://www.strava.com/api/v3/athletes/663067/activities?access_token=76b4ec0f6143822d5f5d33a42fc554daa5f9f82d"
      )
      .then(response => {
        const activities = response.data;
        this.setState({ activities });
      });
  }

  render() {
    return <div>
        <h2>Recent Activities</h2>
        <ul>
          {console.log(this.state.activities)}
          {this.state.activities.map(activity => <li key={activity.id}>
              <a href={"https://www.strava.com/activities/" + activity.id}>
                {activity.name} - {activity.kudos_count} - {activity.distance / 1000}km - {activity.suffer_score}
              </a>
            </li>)}
        </ul>
      </div>;
  }
}

export default Activities