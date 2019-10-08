import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import TaskList from "./tasks/TaskList";
import Register from "./login/Register";
import Login from "./login/Login";
import EventsList from "./events/EventsList";
import EventsForm from "./events/EventsForm";

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          path="/home"
          render={props => {
            return this.isAuthenticated() ? (
              <Home {...props} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />

        <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />

        <Route
          path="/logout"
          render={props => {
            return <Login {...props} />;
          }}
        />

        <Route
          path="/register"
          render={props => {
            return <Register {...props} />;
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            return <TaskList {...props} />;
          }}

        />
        <Route
          exact path="/events"
          render={props => {
            return this.isAuthenticated() ? (
              <EventsList {...props} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />

        <Route exact path="/events/new" render={(props) => {
          return this.isAuthenticated() ? <EventsForm {...props} /> : <Redirect to="/login" />
        }} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
