import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      pwd:""
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => (res.json()))
      .then((resJson) => {
        this.setState({
          users: resJson.data
        })
      })
  }

  render = () => (
    <div>
      {this.state.users.map((s) => (
        <div>
          <img src={s.avatar} /> {s.first_name} {s.last_name}
        </div>
      ))}
    </div>
  )
}

