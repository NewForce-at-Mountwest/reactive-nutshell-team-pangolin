import React, { Component, useDebugValue } from "react";
// import { Link } from "react-router-dom";
// import TaskManager from "../../modules/TaskManager";

// this module currently not being useDebugValue. may decide to bring back over material from TaskList to this module later if completed other dev tasks
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
