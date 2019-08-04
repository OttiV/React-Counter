import React, { Component } from "react";
export default class Total extends Component {
  render() {
    const { counterTot, altData, extraData } = this.props;
    const tot = counterTot + extraData + parseFloat(altData)
    return <div className="Total"><h1 class="title">Total = {tot}
    <a className="button is-info is-outlined" onClick={this.props.onDelete}>
    <span>Reset</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </a></h1>
  </div>
  }
}
