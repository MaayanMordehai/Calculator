import React from "react";
import PropTypes from "prop-types";

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

export default Operand;