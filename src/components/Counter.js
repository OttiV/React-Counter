import React, { Component } from 'react';

export default class Counter extends Component {
    OnDecrement = () => {
      const { id, value } = this.props;
      this.props.updateCounterValue(id, value - 1);
    };
    OnIncrement = () => {
      const { id, value } = this.props;
      this.props.updateCounterValue(id, value + 1);
    };
    render() {
      const { value } = this.props;
      return (
        <div className="counter">
          <b>{value}</b>
          <div className="counter-controls">
            <button
              onClick={this.OnDecrement}
              className="button is-danger is-small"
            >
              -
            </button>
            <button
              onClick={this.OnIncrement}
              className="button is-success is-small"
            >
              +
            </button>
          </div>
        </div>
      );
    }
  }