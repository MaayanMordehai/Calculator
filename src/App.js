
import './App.css';
import Calculator from './components/Calculator/Calculator'
import React from 'react';

const App = () => {
  return (
    <div>
      <Calculator/>
    </div>
  )
}

export default React.memo(App);
