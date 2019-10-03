import React, { Component } from 'react';
import TaskManager from '../../modules/TaskManager';
// import './TaskForm.css'

class TaskForm extends Component {
    state = {
        task: "",
        date: "",
        archived: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    buildTask = evt => {
        evt.preventDefault();
        if (this.state.task === "" || this.state.date === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            const newTask = {
                task: this.state.task,
                date: this.state.date,
                archived: false
            };

            // Create the task and close new fields to view only list of items
            TaskManager.post(newTask)
            .then(() => this.props.history.push("/tasks"));
        }
    };

// export default TaskForm