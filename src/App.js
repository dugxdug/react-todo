import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <TodoList />
    </div>
  );
};

export default App;
