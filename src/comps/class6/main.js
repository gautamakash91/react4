import React from "react";
import Second from "./second";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>
          toggle
        </button>
        {this.state.show &&
          <Second />
        }
      </div>
    )
  }
}