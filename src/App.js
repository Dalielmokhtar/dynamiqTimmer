import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'


var ms =12052000
var ss = Math.floor(ms / 1000);
var mm = Math.floor(ss / 60);
ss = ss % 60;
var hh = Math.floor(mm / 60);
mm = mm % 60;

function App() {
  return (
    <div className="App">
      <Timer hour={hh} min={mm} sec={ss} />
    </div>
  );
}

export default App;
