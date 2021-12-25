import React from "react";
import classes from "./backdrop.module.css";
import PropTypes from "prop-types";

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}>{props.children}</div> : null
);

Backdrop.propTypes = {
    show : PropTypes.bool,
    clicked : PropTypes.func,
}

export default Backdrop;