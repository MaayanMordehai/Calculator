import React from "react";
import PropTypes from "prop-types";

const History = (props) => {
    const { history, showHistory, setShowHistory, classes } = props;

    
    const historyClicked = () => {
      setShowHistory(!showHistory);
    }

    const History = () => {
        return history.map((exercise, index) => {
            return <div key={index}>{exercise.join('')}</div>;
        })
    } 
    return <button className={classes} onClick={() => historyClicked()}>HISTORY</button>
}

export default History;