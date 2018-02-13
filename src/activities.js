import React, { Component } from "react";
import axios from 'axios';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    } 
  }

  componentDidMount() {
    axios
      .get(
        'https://www.strava.com/api/v3/athletes/663067/activities',
        {
          params: {
          access_token: '76b4ec0f6143822d5f5d33a42fc554daa5f9f82d'
        }
      }
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
          {this.state.activities.map(activity => (
            <Activity 
              id={activity.id} 
              kudos_count= {activity.kudos_count }
              distance={activity.distance}
              suffer_score={activity.suffer_score}
            />
          ))}
        </ul>
      </div>;
  }
}

class Activity extends Component {
  render(props) {
    return <li>
        <a href={"https://www.strava.com/activities/" + this.props.id}>
          {this.props.name} -
          {this.props.kudos_count} -
          {this.props.distance / 1000}km -
          {this.props.suffer_score}
        </a>
      </li>;
  }
}

export default Activities