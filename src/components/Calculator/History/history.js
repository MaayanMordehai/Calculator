import React from "react";
import PropTypes from "prop-types";
import styles from "./history.module.css"
import Aux from "../../hoc/Auxiliary";
import Backdrop from "./Backdrop/backdrop";

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
    return (
    <Aux>
        <button className={[classes, styles.calcbutton].join(' ')} onClick={() => historyClicked()}>HISTORY</button>
        <Backdrop show={showHistory} clicked={historyClicked}>
            <div className={styles.history}>{History()}</div>
        </Backdrop>
    </Aux>
    );
}

export default History;