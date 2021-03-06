import React from "react";
import PropTypes from "prop-types";
import "./Operand.css"

const Operand = (props) => {
    const { ignore, currentExercise, operand, changeCurrentExercise } = props;

    const operandClicked = () => {
        if (!ignore) {
            let newExercise = [...currentExercise];
            let lastObject = newExercise.at(-1);
            if (Number.isInteger(lastObject)) {
              newExercise.push(operand);
              changeCurrentExercise(newExercise);
            }
        }        
    }

    return (
        <button onClick={() => operandClicked()} className="operands">{operand}</button>
    )
}

Operand.propTypes = {
    ignore: PropTypes.bool,
    currentExercise: PropTypes.array,
    operand: PropTypes.string,
    changeCurrentExercise: PropTypes.func
}

export default Operand;