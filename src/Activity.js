import React, { Component } from "react";

class Activity extends Component {
  render() {
    return <tr key={this.props.id}>
        <td>
          <a href={"https://www.strava.com/activities/" + this.props.id}>
            {this.props.name}
          </a>
        </td>
        <td>{this.props.kudos_count}</td>
        <td>{this.props.distance / 1000}km</td>
        <td>{this.props.suffer_score}</td>
        <td>{this.props.max_heartrate}</td>
      </tr>;
  }
}

export default Activity