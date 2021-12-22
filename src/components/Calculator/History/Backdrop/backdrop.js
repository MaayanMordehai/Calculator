import React from "react";
import classes from "./history.css";
import PropTypes from "prop-types";

const backdrop = (props) => {
    const {showHistory} = props;
    showHistory ? <div className={classes.backdrop}></div> : null
}

export default backdrop;