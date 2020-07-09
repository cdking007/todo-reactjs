import React, { Component } from "react";
import TodoItem from "./TodoItem.component";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
