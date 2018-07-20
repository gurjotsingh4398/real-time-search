import React, { Component } from "react";
import classes from "./App.css";
import Search from "./containers/Search";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Search />
      </div>
    );
  }
}

export default App;
