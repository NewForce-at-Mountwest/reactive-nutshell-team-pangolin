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

  // editing method to save upon enter key press with userId specific. Then use api manager to PUT and reGET all, and clear TaskToEdit object so edit fields go away
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

  // keeping state up to date with typing in changes
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount() {
    // getAll fetch call will get everything that is not archived
    TaskManager.getAll().then(tasks => {
      this.setState({
        tasks: tasks
      });
    });
  }

  // unon ADD button, POST a new item to server
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

  // after checkbox click, PATCH item on server to be archived
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
      <body id="task-body">
        <h1>Tasks</h1>
        <form>
          {/* inputs for new task and date and ADD btn with a click evt to build method */}
          <fieldset>
            <div id="newTaskField">
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
                // date type will allow us to see a pop up calendar to select date
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
            </div></div>
          </fieldset>
        </form>
        <section className="section-content"></section>
        <div className="tasks-list">
          {/* edit fields show up in that space where the clicked <p> tage was if the new taskToEdit object from state matches the singleTask in the map */}
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
                  // on enter keyup we will run the updateTask method
                  onKeyUp={this.updateTask}
                />
                <input
                  type="date"
                  // date type will allow us to see a pop up calendar to select date
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="date"
                  value={this.state.date}
                   // on enter keyup we will run the updateTask method here too
                  onKeyUp={this.updateTask}
                />
              </>
            ) : (
              <>
              {/* displaying tasks and checkbox  */}
              <div id="tasks-display">
                <input id="checkbox" type="checkbox" onClick={()=>this.handleCheckboxChange(singleTask.id)}></input>
                <p class="listItem"
                  id="task"
                  // on click of the <p> tag, we will have option to set that clicked task as the taskToEdit empty object in state
                  onClick={() => this.setState({
                      taskToEdit: singleTask,
                      task: singleTask.task,
                      date: singleTask.date })}
                >
                  {singleTask.task}
                </p>
                <p class="listItem" id="date">{singleTask.date}</p>
              </div>
              </>
            );
          })}
        </div>
        </body>
      </>
    );
  }
}

export default TaskList;
