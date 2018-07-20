import React from "react";
import classes from "./Header.css";

const Header = props => {
  return (
    <div className={classes.Header}>
      <b>
        <u>React Search!</u>
      </b>
      <br />
      <p>Here is a list of Reggae artists rendered from a JSON object</p>
    </div>
  );
};

export default Header;
