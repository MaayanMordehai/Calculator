import "./Calculator.css";
import NumberComp from "./Number/Number";
import React from "react";
import { useState } from "react";

const Calculator = (props) => {

    const [ currentExercise, setCurrentExercise ] = useState([]);
    const [ history, setHistory ] = useState([]);

    const clearClicked = () => {
      setCurrentExercise([]);
    }

    const deleteClicked = () => {
      let newExercise = [...currentExercise];
      let lastObject = newExercise.pop();
      if (Number.isInteger(lastObject)) {
        let newNumber = parseInt(lastObject / 10);
        if (newNumber != 0){
          newExercise.push(newNumber)
        }
      }
      setCurrentExercise(newExercise);
    }
  
    const operandClicked = (operand) => {
      let newExercise = [...currentExercise];
      let lastObject = newExercise.at(-1);
      if (Number.isInteger(lastObject)) {
        newExercise.push(operand);
        setCurrentExercise(newExercise);
      }
    }
    console.log(currentExercise)
    return (
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand"></div>
            <div className="current-operand">{currentExercise.join('')}</div>
          </div>
          <NumberComp num={1} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={2} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <NumberComp num={3} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <button className="operands" onClick={() => operandClicked("+")}>+</button>
          <NumberComp num={4} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={5} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={6} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <button className="operands" onClick={() => operandClicked("-")}>-</button>
          <NumberComp num={7} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={8} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={9} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <button className="operands" onClick={() => operandClicked("*")}>*</button>
          <NumberComp num={0} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} classes={["span-three"]}/>
          <button className="operands" onClick={() => operandClicked("÷")}>÷</button>
          <button className="actions">HISTORY</button>
          <button className="actions" onClick={() => clearClicked()}>CLEAR</button>
          <button className="actions" onClick={() => deleteClicked()}>DELETE</button>
          <button className="operands">=</button>
        </div>
      )
}

export default React.memo(Calculator);