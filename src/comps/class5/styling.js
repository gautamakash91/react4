import React from "react";
import "./style.css";

export default class Styling extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bg: ""
    }
  }

  handleBg = (e) => {
    this.setState({
      bg: e.target.value
    })
  }

  render() {
    return (
      <div className="parent-div">
        
        <input
          type="range"
          value={this.state.bg}
          onChange={this.handleBg}
        />

        <button
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            border: "1px solid black"
          }}
        >
          click me
        </button>
      </div>
    )
  }
}