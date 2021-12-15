import React from "react";
import PropTypes from "prop-types";

const Number = (props) => {
    return (
        <button onClick={() => props.changeCurrentNumber(props.num + props.currentNum*10)} className={"numbers".concat(" ", props.classes)}>{props.num}</button>
    )
}




export default Number;