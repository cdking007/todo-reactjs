import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid4 } from "uuid";
import TodoList from "./components/Todolist.component";
import TodoInput from "./components/TodoInput.component";

function App() {
  return (
    <div className="container">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
