import { Button } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import StateVars from "../class3/statevars";
import Average from "../class4/average";
import Mapper from "../class4/mapper";

export default class MyRouter extends React.Component{
  render(){
    return(
      <div>
        This is the top section
        
        <BrowserRouter>
          <Link
            style={{textDecoration: "none"}} 
            to="/state"
          >
            <Button>
              go to state
            </Button>
          </Link>
          <Route exact path="/" component={Mapper} />
          <Route path="/state" component={StateVars} />
          <Route path="/avg" component={Average} />
        </BrowserRouter>
        this is the bottom section
      </div>
    )
  }
}