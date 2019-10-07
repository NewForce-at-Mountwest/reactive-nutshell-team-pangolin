import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-events">{this.props.events.name}</span></h3>
          <p>Event Date: {this.props.events.date}</p>
          <p>Event Location: {this.props.events.location}</p>

          <button type="button" onClick={() => this.props.deleteEvent(this.props.events.id)}>Delete</button>

          <Link to={`/events/${this.props.events.id}/edit`}><button>Edit</button></Link>
          <button type="button"

          onClick={() => { this.props.history.push(`/events/${this.props.events.id}`) }}>Details</button>

        </div>
      </div>
    );
  }
}

export default EventsCard;