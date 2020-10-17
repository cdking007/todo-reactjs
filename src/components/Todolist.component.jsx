import React from "react";
import TodoItem from "./TodoItem.component";

class TodoList extends React.Component {
  state = {};

  render() {
    const { items, clearList, handleEdit, handleDelete } = this.props;
    return (
      <div className="card card-body">
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items > 1 ? items.map((item) => (
            <TodoItem
              handleEdit={handleEdit.bind(this, item.id)}
              key={item.id}
              item={item}
              handleDelete={handleDelete.bind(this, item.id)}
            />
          )) : <h4>Nothing to do Yay!</h4>}
        </ul>
        <button
          className="btn btn-block btn-danger text-uppercase"
          onClick={clearList} style={{width:'250px',margin:'auto'}}
        >
          Clear All Tasks
        </button>
      </div>
    );
  }
}

export default TodoList;
