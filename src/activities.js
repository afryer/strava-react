import React, { Component } from "react";
import axios from 'axios';
import Activity from './Activity';


class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      toggleDetails: true,
      toggleSuffering: true,
      toggleKudos: true,
      toggleHeartRate: true
    };

    this.toggleHeartRate = this.toggleHeartRate.bind(this);
    this.toggleKudos = this.toggleKudos.bind(this);
    this.toggleSuffering = this.toggleSuffering.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://www.strava.com/api/v3/athletes/663067/activities", {
        params: {
          access_token: "76b4ec0f6143822d5f5d33a42fc554daa5f9f82d",
          per_page: "200"
        }
      })
      .then(response => {
        const activities = response.data;
        this.setState({ activities });
      });
  }

  toggleDetails() {
    var byDistance = this.state.activities;
    byDistance.sort((a, b) => {
      if (this.state.toggleDetails) {
        return b.distance - a.distance;
      } else {
        return a.distance - b.distance;
      }
    });

    this.setState({ activities: byDistance });
    this.setState({ toggleDetails: !this.state.toggleDetails });
  }

  toggleHeartRate() {
    var byHR = this.state.activities;
    byHR.sort((a, b) => {
      if (this.state.toggleDetails) {
        return b.max_heartrate - a.max_heartrate;
      } else {
        return a.max_heartrate - b.max_heartrate;
      }
    });

    this.setState({ activities: byHR });
    this.setState({ toggleHeartRate: !this.state.toggleHeartRate });
  }

  toggleSuffering() {
    var bySuffering = this.state.activities;
    bySuffering.sort((a, b) => {
      if (this.state.toggleSuffering) {
        return b.suffer_score - a.suffer_score;
      } else {
        return a.suffer_score - b.suffer_score;
      }
    });

    this.setState({ activities: bySuffering });
    this.setState({ toggleSuffering: !this.state.toggleSuffering });
  }

  toggleKudos() {
    var byKudos = this.state.activities;
    byKudos.sort((a, b) => {
      if (this.state.toggleKudos) {
        return b.kudos_count - a.kudos_count;
      } else {
        return a.kudos_count - b.kudos_count;
      }
    });

    this.setState({ activities: byKudos });
    this.setState({ toggleKudos: !this.state.toggleKudos });
  }

  render() {
    return <div>
        <h2>Recent Activities</h2>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                Kudos <button onClick={this.toggleKudos}>
                  {this.state.toggleKudos ? "Hate me" : "Love me"}
                </button>
              </td>
              <td>
                Distance <button onClick={this.toggleDetails}>
                  {this.state.toggleDetails ? "Short" : "Long"}
                </button>
              </td>
              <td>
                Suffer
                <button onClick={this.toggleSuffering}>
                  {this.state.toggleSuffering ? "Easy Life" : "Suffering"}
                </button>
              </td>
              <td>
                Max heart rate
                <button onClick={this.toggleHeartRate}>
                  {this.state.toggleHeartRate ? "Easy Life" : "Suffering"}
                </button>
              </td>
            </tr>
            {this.state.activities.map(activity => (
              <Activity
                key={activity.id}
                id={activity.id}
                name={activity.name}
                kudos_count={activity.kudos_count}
                distance={activity.distance}
                suffer_score={activity.suffer_score}
                max_heartrate={activity.max_heartrate}
              />
            ))}
          </tbody>
        </table>
      </div>;
  }
}



export default Activities