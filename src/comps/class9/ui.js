import React from "react";
import {
  IconButton,
  Icon,
  Button,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress
} from "@material-ui/core";

export default class UI extends React.Component {

  componentDidMount() {
    
  }

  getData = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => { return res.json() })
      .then((resJson) => {
        console.log(resJson);
      })
  }

  render() {
    return (
      <div>
        <button>
          Click me
        </button>
        <Button
          style={{ backgroundColor: "green", color: "white" }}
          variant="outlined"
          size="small"
        >
          Click me
        </Button>

        <br />
        <input
          placeholder="enter name"
        />

        <TextField
          variant="outlined"
          color="secondary"
          margin="dense"
          label="enter name"
          required={true}
        />
        <br />
        <IconButton>
          <Icon>
            content_cut
          </Icon>
        </IconButton>

        <Dialog open={false}>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}