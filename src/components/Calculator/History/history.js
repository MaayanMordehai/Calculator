import React from "react";
import PropTypes from "prop-types";

const History = (props) => {
    const { history } = props;
    return history.map((exercise, index) => {
        return <div key={index}>{exercise.join('')}</div>;
    })
}

export default History;