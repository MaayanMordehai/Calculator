import React from "react";
import PropTypes from "prop-types";

const NumberComp = (props) => {
    const { resetExercise, setResetExercise, currentExercise, num, classes, changeCurrentExercise } = props;

    const numberClicked = () => {
        let newExercise = [...currentExercise];

        if (resetExercise) {
            setResetExercise(false);
            newExercise = [];
        }

        let lastObject = newExercise.at(-1);
        let numToInsert = num;

        if (Number.isInteger(lastObject)) {
            newExercise.pop();
            numToInsert = num + lastObject * 10;
        }

        newExercise.push(numToInsert);
        changeCurrentExercise(newExercise);
    }

    return (
        <button onClick={() => numberClicked()} className={"numbers".concat(" ", classes)}>{num}</button>
    )
}

export default NumberComp;