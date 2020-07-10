import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    const { item, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{item.title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fa fa-pencil"></i>
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
