import React, { Component } from "react";

class ActivityFilter extends Component {
  render (){
    return <div>
      <h2> Filter by Activity</h2>
      <form action="post" className="form">
        <fieldset>
          <legend className="visually-hidden">
            Filter by Activity
          </legend>
          <div className="form__group">
            <label htmlFor="ddlTitle">
              Activity:
            </label>
            <div className="form__item">
              <select id="ddlTitle" value={this.props.value} onChange={this.props.change}>
                <option value="Run">Running</option>
                <option value="Ride">Riding</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    </div>;
  }
}

export default ActivityFilter;