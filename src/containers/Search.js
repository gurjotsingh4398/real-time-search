import React, { Component } from "react";
import Header from "../components/Header";
import classes from "./Search.css";
import axios from "axios";

export default class Search extends Component {
  state = {
    search: "",
    data: []
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  componentWillMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
      )
      .then(res => {
        this.setState({
          data: res.data.Reggae
        });
      });
  }

  render() {
    let list = this.state.data;
    let str = this.state.search.trim().toLowerCase();
    if (str.length > 0) {
      list = list.filter(item => item.toLowerCase().match(str));
    }
    return (
      <div className={classes.Search}>
        <Header />
        <p>Search:</p>
        <input
          type="text"
          placeholder="Search the list with React"
          onChange={this.handleSearch}
          value={this.state.search}
        />

        <ul className={classes.List}>
          {list.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      </div>
    );
  }
}
