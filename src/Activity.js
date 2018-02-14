import React, { Component } from "react";

class Activity extends Component {
  render(props) {
    return (
    
    <li className="activity__item" key={this.props.id}>
      <a href={"https://www.strava.com/activities/" + this.props.id}>
        {this.props.name} -
          {this.props.kudos_count} -
          {this.props.distance / 1000}km -
          {this.props.suffer_score}
      </a>
    </li>

    );
  }
}

export default Activity