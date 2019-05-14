import React from 'react';
import './App.css';
import './Timer'

function Timer(props) {
  return (
    <div className="timer">
    <div className='Time'>
      <p>{props.hour}</p>
      <p>:</p>
      <p>{props.min}</p>
      <p>:</p>
      <p>{props.sec}</p>
      </div>
      <div className='format' >
        <span>Hour</span>
        <span>Minute</span>
        <span>Second</span>
      </div>
    </div>
  );
}

export default Timer;