import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import TaskList from "./tasks/TaskList";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          path="/home"
          render={props => {
            return <Home />;
          }}
        />
         <Route
      path="/tasks"
      render={props => {
        return <TaskList />
      }}
    />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
