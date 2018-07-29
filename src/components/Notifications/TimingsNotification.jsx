import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Snackbars from "components/Snackbar/Snackbar.jsx";
import Button from "components/CustomButtons/Button.jsx";

class Example extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
    };
  }
  showNotification(place) {
    if(!this.state[place]){
      var x = [];
      x[place] = true;
      this.setState(x);
      // use this to make the notification autoclose
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  render(){
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.showNotification("tl")}>
          Top Left
        </Button>
        <Snackbars
          place="tl"
          color="info"
          icon={AddAlert}
          message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
          open={this.state.tl}
          closeNotification={() => this.setState({ tl: false })}
          close
        />
      </div>
    );
  }
}

export default Example;
