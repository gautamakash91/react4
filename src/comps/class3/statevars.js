import React from "react";

export default class StateVars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 10,
      b: 20,
      c: 30,
      d: "Nextstacks"
    }
  }

  handleClick = () => {
    //1. calculate sum
    //2. use the sum state variable to calculate average
    //3. display results
    this.setState({
      b: this.state.a,
      c: this.state.b
    })
  }

  handleD = (e) => {
    this.setState({
      d: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.d} onChange={this.handleD} />

        <button onClick={this.handleClick}>
          click me
        </button>
        <br />
        a: {this.state.a} <br />
        b: {this.state.b} <br />
        c: {this.state.c}
      </div>
    )
  }
}