import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  state = {
    tasks: [],
    task: "",
    date: "",
    archived: "",
    loadingStatus: false
  };

clickToEdit= (id)=>{

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
      })
    })
  };

buildTask = evt => {
    evt.preventDefault();
    if (this.state.task === "" || this.state.date === "") {
        window.alert("Please input all fields");
    } else
    {
        this.setState({ loadingStatus: true })
        const newTask = {
            task: this.state.task,
            date: this.state.date,
            archived: false,
            userId: 1
        };

        // Create the task and close new fields to view only list of items
        TaskManager.post(newTask)
        .then(TaskManager.getAll).then(tasks=>{
            this.setState({
                tasks: tasks
              })
        })
    };
}

  render() {
    return (
      <>
      <h1>Tasks</h1>
      <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="task"
                        placeholder="Task"
                        />
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                    </div>
                    <div className="alignBtnRt">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.buildTask}
                        >Add</button>
                    </div>
                </fieldset>
            </form>
        <section className="section-content">
        </section>
        <div className="tasks-list">
          {this.state.tasks.map(singleTask =>
            singleTask.archived === false ? (
              <TaskItem key={singleTask.id} TaskProp={singleTask} />
            ) : null
          )}
        </div>
      </>
    )
  };
};

export default TaskList;
