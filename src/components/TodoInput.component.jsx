import React, { Component } from "react";

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange} 
            />
          </div>
          {editItem === false && (
            <button
              className="btn btn-primary btn-block mt-3 text-uppercase"
              disabled={item.length > 1 ? false : true} style={{width:'250px',margin:'auto'}}
            >
              Add Task
            </button>
          )}
          {editItem && (
            <button
              className="btn btn-success btn-block mt-3 text-uppercase"
              disabled={item ? false : true}
            >
              Edit Task
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default TodoInput;
