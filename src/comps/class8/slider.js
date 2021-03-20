import React from "react";

export default class Slider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      range: 0,
      target: {
        value: 123
      }
    }
  }

  handleRange = (event) => {
    this.setState({
      range: parseInt(event.target.value)
    })
  }

  render(){
    return(
      <div>
        <input type="range" value={this.state.range} onChange={this.handleRange} />

        {this.state.range === 0 && "this is the min value"}
        {this.state.range === 100 && "this is the max value"}

      </div>
    )
  }
}