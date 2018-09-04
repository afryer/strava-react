import React, { Component } from "react";
import axios from 'axios';
import Activity from './ActivityRow/ActivityRow';
import ActivityFilter from './Filter/ActivityFilter';
import './Activities.css'

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      baseActivities: [],
      toggleDistance: false,
      toggleSuffering: false,
      toggleKudos: false,
      toggleHeartRate: false,
      toggleAscent: false,
      value: "null"
    };

    this.toggleHeartRate = this.toggleHeartRate.bind(this);
    this.toggleAscent = this.toggleAscent.bind(this);
    this.toggleKudos = this.toggleKudos.bind(this);
    this.toggleSuffering = this.toggleSuffering.bind(this);
    this.toggleDistance = this.toggleDistance.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        this.setState({ baseActivities: activities });
      });
  }

  toggleDistance() {
    let byDistance = [...this.state.activities];
    byDistance.sort((a, b) => {
      if (this.state.toggleDistance) {
        return b.distance - a.distance;
      } else {
        return a.distance - b.distance;
      }
    });

    this.setState({ activities: byDistance });
    this.setState({ toggleDistance: !this.state.toggleDistance });
  }

  toggleAscent() {
    let byAscent = [...this.state.activities];
    byAscent.sort((a, b) => {
      if (this.state.toggleAscent) {
        return b.total_elevation_gain - a.total_elevation_gain;
      } else {
        return a.total_elevation_gain - b.total_elevation_gain;
      }
    });

    this.setState({ activities: byAscent });
    this.setState({ toggleAscent: !this.state.toggleAscent });
  }

  toggleHeartRate() {
    let byHR = [...this.state.activities];
    byHR.sort((a, b) => {
      if (this.state.toggleHeartRate) {
        return b.max_heartrate - a.max_heartrate;
      } else {
        return a.max_heartrate - b.max_heartrate;
      }
    });

    this.setState({ activities: byHR });
    this.setState({ toggleHeartRate: !this.state.toggleHeartRate });
  }

  toggleSuffering() {
    let bySuffering = [...this.state.activities];
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
    let byKudos = [...this.state.activities];
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

  handleChange(event) {
    const filteredActivities = this.state.baseActivities;
    const filteredByActivities = filteredActivities.filter(
      activity => activity.type === event.target.value
    );
    
    this.setState({ value: event.target.value });
    this.setState({ activities: filteredByActivities });
  }

  render() {
    return <div>
        <ActivityFilter change={this.handleChange} />
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
                Distance <button onClick={this.toggleDistance}>
                  {this.state.toggleDistance ? "Short" : "Long"}
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
              <td>Type</td>
              <td>
                total_elevation_gain
                <button onClick={this.toggleAscent}>
                  {this.state.toggleAscent ? "Easy Life" : "Suffering"}
                </button>
              </td>
            </tr>

            {this.state.activities.map(activity => (
              <ActivityRow
                key={activity.id}
                id={activity.id}
                name={activity.name}
                kudos_count={activity.kudos_count}
                distance={activity.distance}
                suffer_score={activity.suffer_score}
                max_heartrate={activity.max_heartrate}
                type={activity.type}
                total_elevation_gain={activity.total_elevation_gain}
              />
            ))}
          </tbody>
        </table>
      </div>;
  }
}



export default Activities