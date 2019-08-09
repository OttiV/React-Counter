import React, { Component } from "react";
import AlternativeCounter from "./components/AlternativeCounter";
import Counter from "./components/Counter";
import FourthCounter from "./components/FourthCounter";
import Total from "./components/Total";
import "./scss/App.scss";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.initialState = {
      data: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
      extraData: 0,
      altData: 0
    };
    this.state = this.initialState;
  }
  OnDecrement = () => {
    this.setState({
      extraData: this.state.extraData - 1
    });
  };
  OnIncrement = () => {
    this.setState({
      extraData: this.state.extraData + 1
    });
  };
  OnChange = event => {
    this.setState({
      altData: event.target.value
    });
  };
  onDelete = () => {
    this.setState(this.initialState);
  };
  renderCounter = counter => {
    return (
      <Counter
        id={counter.id}
        value={counter.value}
        key={counter.id}
        updateCounterValue={this.updateCounterValue}
      />
    );
  };

  updateCounterValue = (id, value) => {
    const updatedCounters = this.state.data.map(counter => {
      if (counter.id === id) {
        return {
          ...counter,
          value
        };
      } else {
        return counter;
      }
    });
    this.setState({ data: updatedCounters });
  };

  render() {
    return (
      <div className="app">
        <div className="counter-displayer">
          <div className="main-counter">
            <div>{this.state.data.map(this.renderCounter)}</div>
            <FourthCounter
              extraData={this.state.extraData}
              OnDecrement={this.OnDecrement}
              OnIncrement={this.OnIncrement}
            />
            <AlternativeCounter
              OnChange={this.OnChange}
              altData={this.state.altData}
            />
          </div>
          <div className="counter-total">
            <Total
              counterTot={this.state.data.reduce((a, c) => a + c.value, 0)}
              extraData={this.state.extraData}
              altData={this.state.altData}
              onDelete={this.onDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
