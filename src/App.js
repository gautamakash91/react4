import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0
    }
  }


  render() {
    return (
      <div>
        <input
          value={this.state.a}
          onChange={this.handleA}
          placeholder="enter value of a"
        />

        <input
          value={this.state.b}
          onChange={this.handleB}
          placeholder="enter value of b"
        />

        <button>
          ADD
        </button>
      </div>
    )
  }
}