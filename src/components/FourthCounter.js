import React, { Component } from "react";

export default class Counter extends Component {
  
  render() {
    console.log("this.props", this.props.extraData);
    const { extraData } = this.props;
    return (
      <div className="counter">
        <b className="value">{extraData}</b>
        <div className="counter-controls">
          <button
            onClick={this.props.OnDecrement}
            className="button is-danger is-small"
          >
            -
          </button>
          <button
            onClick={this.props.OnIncrement}
            className="button is-success is-small"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
