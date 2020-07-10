import React, { Component } from "react";
import { v4 as uuid4 } from "uuid";
import TodoList from "./components/Todolist.component";
import TodoInput from "./components/TodoInput.component";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Wake up",
      },
      {
        id: 2,
        title: "Make Breakfast",
      },
    ],
    item: "",
    id: uuid4(),
    editMode: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid4(),
      editMode: false,
    });
  };
  clearList = () => {
    console.log("CLear the list");
  };
  handleDelete = (id) => {
    console.log(`Handle delete on id ${id}`);
  };
  handleEdit = (id) => {
    console.log(`Handle Edit on id ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-10 mt-2">
            <h3 className="text-capitalize text-center"> Todo Input </h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editMode}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
