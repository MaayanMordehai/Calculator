import "./Calculator.css";
import Number from "./Number/Number";
import React from "react";
import { useState } from "react";

const Calculator = (props) => {

    const [ currentNumber, setCurrentNumber ] = useState(null);

    return (
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand"></div>
            <div className="current-operand">{currentNumber}</div>
          </div>
          <Number num={1} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber} />
          <Number num={2} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <Number num={3} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <button className="operands">+</button>
          <Number num={4} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <Number num={5} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <Number num={6} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <button className="operands">-</button>
          <Number num={7} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <Number num={8} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <Number num={9} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber}/>
          <button className="operands">*</button>
          <Number num={0} currentNum={currentNumber} changeCurrentNumber={setCurrentNumber} classes={["span-three"]}/>
          <button className="operands">÷</button>
          <button className="actions">HISTORY</button>
          <button className="actions">CLEAR</button>
          <button className="actions">DELETE</button>
          <button className="operands">=</button>
        </div>
      )
}

export default React.memo(Calculator);