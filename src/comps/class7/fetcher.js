import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clr: ""
    }
  }

  componentDidMount() {
    // this.getColor();
    this.createUser();
  }

  getColor = () => {
    fetch("https://www.colr.org/json/color/random")
      .then((res) => (res.json()))
      .then((resJson) => {
        console.log(resJson.colors[0].hex);
        this.setState({
          clr: resJson.colors[0].hex
        })
      })
  }

  createUser = () => {
    fetch("https://reqres.in/api/users", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Akash',
        job: 'dev'
      })
    })
      .then((res) => (res.json()))
      .then((resJson) => {
        console.log(resJson)
      })
  }

  render() {
    return (
      <div>
        Fetcher: {this.state.clr}
      </div>
    )
  }
}