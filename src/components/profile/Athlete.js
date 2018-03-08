import React, { Component } from "react";
import axios from 'axios';
import Details from "./Details";
import Clubs from "./Clubs";

class Athlete extends Component {
  constructor(props){
    super(props);
    this.state = {
      athlete: [],
      clubs: []
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
        const clubs = response.data.clubs
        this.setState({ athlete:athlete, clubs:clubs });

      });
  }
  
  render() {
    return <div className="profile">
        <Details profile={this.state.athlete.profile} firstname={this.state.athlete.firstname} lastname={this.state.athlete.lastname} city={this.state.athlete.city} weight={this.state.athlete.weight} state={this.state.athlete.state} sex={this.state.athlete.sex} created_at={this.state.athlete.created_at} clubs={this.state.athlete.clubs} />
        <ul className="club-list">
          {this.state.clubs.map(club => (
            <Clubs
              key={club.id}
              url={club.url}
              id={club.id}
              name={club.name}
              member_count={club.member_count}
              profile_medium={club.profile_medium}
            />
          ))}
        </ul>
      </div>;
  }

}

export default Athlete