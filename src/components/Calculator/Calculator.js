import styles from "./Calculator.module.css";
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


    console.log(currentExercise)
    return (
        <div className={styles.calculatorgrid}>
          <div className={styles.output}>
            <div className={styles.previousoperand}>{resetExercise ? currentExercise.join('') : null}</div>
            <div className={styles.currentoperand}>{resetExercise ? answer : currentExercise.join('')}</div>
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
          <NumberComp num={0} resetExercise={resetExercise} setResetExercise={setResetExercise} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} classes={styles.spanthree}/>
          <Operand ignore={resetExercise} operand={operands.devide} currentExercise={currentExercise} changeCurrentExercise={setCurrentExercise} />
          <History history={history} classes={styles.actions} setShowHistory={setShowHistory} showHistory={showHistory}/>
          <button className={styles.actions} onClick={() => clearClicked()}>CLEAR</button>
          <button className={styles.actions} onClick={() => deleteClicked()}>DELETE</button>
          <button className={styles.actions} onClick={() => calculate()}>{operands.equal}</button>
        </div>
      )
}

export default React.memo(Calculator);