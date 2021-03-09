import React from "react";

export default class Conditional extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false
      text: ""
    }
  }

  // handleLogin = (e) => {
  //   this.setState({
  //     loggedIn: true
  //   })
  // }

  // handleLogout = (e) => {
  //   this.setState({
  //     loggedIn: false
  //   })
  // }

  handleText = (e) => {
    this.setState({
      text: parseInt(e.target.value)
    },function(){
      var a = isNaN(this.state.text);
      if(a === false){
        alert("A is a number");
      }else{
        alert("A is not a number");
      }
    })
  }

  render() {
    return (
      <div>

        {/* {this.state.loggedIn === false ?
          <button onClick={this.handleLogin}>
            login
          </button>
          :
          <button onClick={this.handleLogout}>
            logout
          </button>
        }

        {this.state.loggedIn === false &&
          <button onClick={this.handleLogin}>
            login
          </button>
        } */}

        <input 
          value={this.state.text}
          onChange={this.handleText}
        />

      </div>
    )
  }
}