import React, { Component } from "react";

export default class AlternativeCounter extends Component {
  render() {
    return (
      <div className="counter" >
        <input
          name="num"
          type="number"
          value={this.props.altData} 
          onChange={this.props.OnChange}
          className={"input"}
        />
       </div>
    );
  }
}
