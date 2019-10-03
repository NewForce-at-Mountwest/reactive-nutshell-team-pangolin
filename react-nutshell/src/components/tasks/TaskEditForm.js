import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";
// import "./TaskForm.css"

class TaskEdit extends Component {
  //set the initial state
  state = {
    task: "",
    date: "",
    archived: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.TaskId,
      task: this.state.task,
      date: this.state.date,
      archived: false
    };

    TaskManager.update(editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    TaskManager.getOne(this.props.match.params.taskId).then(tasks => {
      this.setState({
        task: tasks.task,
        date: tasks.date,
        archived: false,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <div className="taskListItem">
          <input
            type="text"
            required
            className="form-control"
            onChange={this.handleFieldChange}
            id="task"
            value={this.state.task}
          >
            {this.props.TaskProp.task}
          </input>
          <input
            type="text"
            required
            className="form-control"
            onChange={this.handleFieldChange}
            id="date"
            value={this.state.date}
          >
            {this.props.TaskProp.date}
          </input>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.updateExistingTask}
            className="btn btn-primary"
          >
            Save
          </button>
        </div>
      </>
    );
  }
}

export default TaskEdit;
