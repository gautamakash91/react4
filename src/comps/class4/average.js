import React from "react";

export default class Average extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 0,
      sum: 0,
      average: 0
    }
  }

  handleA = (e) => {
    this.setState({
      a: parseInt(e.target.value)
    })
  }

  handleB = (e) => {
    this.setState({
      b: parseInt(e.target.value)
    })
  }

  findAverage = () => {
    this.setState({
      sum: this.state.a + this.state.b
    }, function(){
      this.setState({
        average: this.state.sum/2
      })
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.a}
          onChange={this.handleA}
          placeholder="enter a number"
          type="number"
        />

        <input
          value={this.state.b}
          onChange={this.handleB}
          placeholder="enter a number"
          type="number"
        />

        <button onClick={this.findAverage}>
          Calculate average
        </button>

        <br />

        sum is {this.state.sum}
        <br />
        average is {this.state.average}
      </div>
    )
  }
}