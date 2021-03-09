import React from "react";

export default class Second extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "0"
    }
  }

  // componentDidMount(){
  //   console.log("hi from component did mount");
  // }

  // componentDidUpdate(){
  //   console.log("hi from component did update");
  // }

  // componentWillUnmount(){
  //   console.log("hi from component will unmount");
  // }

  handleA = (e) => {
    this.setState({
      a: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          // value={this.state.a}
          onChange={this.handleA}
        />
      </div>
    )
  }
}