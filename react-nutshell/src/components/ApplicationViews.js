import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import TaskList from "./tasks/TaskList";
import Register from "./login/Register";
import Login from "./login/Login";
import EventsList from "./events/EventsList";
import EventsForm from "./events/EventsForm";
import NewsList from "./news/NewsList";
import NewsCreate from "./news/NewsCreate";
import NewsEdit from "./news/NewsEdit";

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
            return this.isAuthenticated() ? (
              <TaskList {...props} />
            ) : (
                <Redirect to="/login" />
              );
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


        <Route
          exact
          path="/news"
          render={props => {
            return this.isAuthenticated() ? (
              <NewsList {...props} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />
        <Route
          path="/news/create"
          render={props => {
            return this.isAuthenticated() ? (
              <NewsCreate {...props} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={props => {
            return this.isAuthenticated() ? (
              <NewsEdit {...props} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />
      </React.Fragment>
    );
   }
}


export default ApplicationViews;
