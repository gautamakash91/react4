import React from "react";

export default class Comp2 extends React.Component{
  render(){
    return(
      <div>
        hello from Comp 2
        {this.props.vala}
      </div>
    )
  }
}
