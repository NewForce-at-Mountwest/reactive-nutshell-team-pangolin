import React, { Component } from "react";
// import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";

class TaskItem extends Component {
  render() {
    return (
      <div className="taskListItem">
        <p>{this.props.TaskProp.task}</p>
        <p>{this.props.TaskProp.date}</p>
        <input type="checkbox"></input>
      </div>
    );
  }
}

export default TaskItem;
