import React, { Component } from "react";
import TodoItem from "./TodoItem.component";

class TodoList extends Component {
  state = {};

  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <div className="card card-body">
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleEdit={handleEdit.bind(this, item.id)}
              handleDelete={handleDelete.bind(this, item.id)}
            />
          ))}
        </ul>
        <button
          className="btn btn-block btn-danger text-uppercase"
          onClick={clearList}
        >
          Clear Todos
        </button>
      </div>
    );
  }
}

export default TodoList;
