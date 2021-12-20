import "./Calculator.css";
import NumberComp from "./Number/Number";
import React from "react";
import { useState } from "react";
import Operand from "../Operand/Operand";
import History from "./History/history";


const Calculator = (props) => {
 
    const operands = {
      plus: "+",
      minus: "-",
      multipul: "*",
      devide: "/",
      equal: "="
    }

    const [ currentExercise, setCurrentExercise ] = useState([]);
    const [ answer, setAnswer ] = useState(null);
    const [ history, setHistory ] = useState([]);
    const [ showHistory, setShowHistory ] = useState(false);
    const [ resetExercise, setResetExercise ] = useState(false);


    const clearClicked = () => {
      setCurrentExercise([]);
      setAnswer(null);
    }

    const deleteClicked = () => {
      let newExercise = [...currentExercise];
      let lastObject = newExercise.pop();
      if (Number.isInteger(lastObject)) {
        let newNumber = parseInt(lastObject / 10);
        if (newNumber !== 0){
          newExercise.push(newNumber)
        }
      }
      setCurrentExercise(newExercise);
    }

    const calculate = () => {
      let newHistory = [...history];
      let exercise = [...currentExercise];
      let lastObject = currentExercise.at(-1);
      let newAnswer;

      if (Number.isInteger(lastObject)) {
        newAnswer = eval(currentExercise.join(''));
        setAnswer(newAnswer);
        exercise.push(operands.equal);
        exercise.push(newAnswer);
        newHistory.push(exercise);
        setHistory(newHistory);
        setResetExercise(true);
      }
    }

    const historyClicked = () => {
      setShowHistory(!showHistory);
    }

    console.log(currentExercise)
    return (
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">{resetExercise ? currentExercise.join('') : null}</div>
            <div className="current-operand">{resetExercise ? answer : currentExercise.join('')}</div>
          </div>
          <NumberComp num={1} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={2} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <NumberComp num={3} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <Operand ignore={resetExercise} operand={operands.plus} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <NumberComp num={4} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={5} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={6} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <Operand ignore={resetExercise} operand={operands.minus} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <NumberComp num={7} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={8} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <NumberComp num={9} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise}/>
          <Operand ignore={resetExercise} operand={operands.multipul} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <NumberComp num={0} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} classes={["span-three"]}/>
          <Operand ignore={resetExercise} operand={operands.devide} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <button className="actions" onClick={() => historyClicked()}>HISTORY</button>
          <button className="actions" onClick={() => clearClicked()}>CLEAR</button>
          <button className="actions" onClick={() => deleteClicked()}>DELETE</button>
          <button className="actions" onClick={() => calculate()}>{operands.equal}</button>
          {showHistory ? <History history={history}/> : null}
        </div>
      )
}

export default React.memo(Calculator);