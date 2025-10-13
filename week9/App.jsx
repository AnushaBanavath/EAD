import React from 'react';
import {useState} from "react";
import ApiCalls from './ApiCalls';
import PasswordStrength from "./passwordstrength";
import './App.css';

function App() {
  return (
    <div className="App">
      <PasswordStrength />
    </div>
  );
}

export default App;
