import React from "react";
import classes from "./backdrop.module.css";

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}>{props.children}</div> : null
);

export default Backdrop;