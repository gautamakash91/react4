import { Button } from "@material-ui/core";
import React from "react";
import {
  Link
} from "react-router-dom";

export default class Mapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      description: "",
      showDescription: "",
      arr: [
        { name: "Creta", type: "car" },
        { name: "CBR 250R", type: "bike" },
        { name: "Honda City", type: "car" }
      ]
    }
  }

  handleTask = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  
  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  showDescription = (desc) => {
    this.setState({
      showDescription: desc
    })
  }

  addTask = () => {
    var a = this.state.arr;
    a.push({
      name: this.state.task,
      type: this.state.description
    })
    this.setState({
      arr: a
    })
  }

  render() {
    return (
      <div>
        <input
          placeholder="enter a task"
          value={this.state.task}
          onChange={this.handleTask}
        />
        <input
          placeholder="enter a description"
          value={this.state.description}
          onChange={this.handleDescription}
        />
        <button onClick={this.addTask}>
          ADD TASK
        </button>


        {this.state.arr.map((obj, index) => {
          return (
            <div>
              {index} - {obj.name} - {obj.type}
              <button onClick={() => { this.showDescription(obj.type) }}>
                delete
              </button>
            </div>
          )
        }
        )}

        {this.state.showDescription}
        <Link to="/avg" style={{textDecoration: "none"}} >
          <Button
            variant="contained"
            color="secondary"
          >
            Go to average
          </Button>
        </Link>
      </div>
    )
  }
}