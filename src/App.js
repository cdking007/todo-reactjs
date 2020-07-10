import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid4 } from "uuid";
import TodoList from "./components/Todolist.component";
import TodoInput from "./components/TodoInput.component";
import TodoItem from "./components/TodoItem.component";

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
    editMode: false,
  };
  handleChange = (e) => {
    console.log("input changed");
  };
  handleSubmit = () => {
    console.log("Handle Submit");
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
