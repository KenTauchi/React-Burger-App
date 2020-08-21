import React from "react";
import classes from "./Button.module.css";

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    // className needs to be in String, which can be done by join(" ") after arrays. classes[props.btnType] is similar to "classes.props.btnType", but classes does not pass props, so using classes[] instead.

    onClick={props.clicked}
  >
    {" "}
    {props.children}
  </button>
);

export default button;
