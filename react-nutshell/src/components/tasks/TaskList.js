import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";
// import TaskItem from "./TaskItem";
import Button from 'react-bootstrap/Button';
import "./Tasks.css";


class TaskList extends Component {
  state = {
    tasks: [],
    task: "",
    date: "",
    archived: "",
    loadingStatus: false,
    taskToEdit: {}
  };

  updateTask = evt => {
      evt.preventDefault();
      if (evt.keyCode === 13)
     { const editedTask = {
        id: this.state.taskToEdit.id,
        task: this.state.task,
        date: this.state.date,
        archived: false,
        userId: this.state.taskToEdit.userId
      };
      TaskManager.update(editedTask)
        .then(TaskManager.getAll)
        .then(tasks => {
          this.setState({
            tasks: tasks,
            taskToEdit: {}
          });
        });}
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    TaskManager.getAll().then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }

  buildTask = evt => {
    evt.preventDefault();
    if (this.state.task === "") {
      window.alert("Please input all fields");
    } else {
      this.setState({ loadingStatus: true });
      const newTask = {
        task: this.state.task,
        date: this.state.date,
        archived: false,
        userId: localStorage.getItem("userId")
      };

      // Create the task and close new fields to view only list of items
      TaskManager.post(newTask)
        .then(TaskManager.getAll)
        .then(tasks => {
          this.setState({
            tasks: tasks
          });
        });
    }
  };

  handleCheckboxChange = (taskId) => {
    TaskManager.archive(taskId)
    .then(TaskManager.getAll)
        .then(tasks => {
          this.setState({
            tasks: tasks
          });
        });
  }

  render() {
    return (
      <>
        <h1>Tasks</h1>
        <form>
          <fieldset id="newTaskField">
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="task"
                placeholder="Task"
              />
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
            </div>
            <div className="align-btn">
              <Button
                variant="info"
                type="button"
                // disabled={this.state.loadingStatus}
                onClick={this.buildTask}
              >
                Add
              </Button>
            </div>
          </fieldset>
        </form>
        <section className="section-content"></section>
        <div className="tasks-list">
          {this.state.tasks.map(singleTask => {
            return this.state.taskToEdit.id === singleTask.id ? (
              <>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="task"
                  value={this.state.task}
                  onKeyUp={this.updateTask}
                />
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="date"
                  value={this.state.date}
                  onKeyUp={this.updateTask}
                />
              </>
            ) : (
              <>
              <div id="tasks-display">
                <p class="listItem"
                  id="task"
                  onClick={() => this.setState({
                      taskToEdit: singleTask,
                      task: singleTask.task,
                      date: singleTask.date })}
                >
                  {singleTask.task}
                </p>
                <p class="listItem" id="date">{singleTask.date}</p>
                <input id="checkbox" type="checkbox" onClick={()=>this.handleCheckboxChange(singleTask.id)}></input>
              </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default TaskList;
