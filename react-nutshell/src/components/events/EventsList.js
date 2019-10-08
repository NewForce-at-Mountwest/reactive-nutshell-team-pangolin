import React, { Component } from 'react'
//import the components we will need
import EventsCard from './EventsCard'
import EventsManager from '../../modules/EventsManager'

class EventsList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    }


    deleteEvent = id => {
        EventsManager.delete(id)
            .then(() => {
                EventsManager.getAll()
                    .then((newEvents) => {
                        this.setState({
                            events: newEvents
                        })
                    })
            })
    }


    componentDidMount() {
        EventsManager.getAll()
            .then((eventsFromDataBase) => {
                console.log(eventsFromDataBase)
                this.setState({
                    events: eventsFromDataBase
                })
            })
    }

    render() {


        return (
            <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/events/new") }}>
                    Enter New Event
                </button>
            </section>
            <div className="container-cards">
                {this.state.events.map(event =>
                    <EventsCard
                        key={event.id}
                        events={event}
                        deleteEvent={this.deleteEvent}
                        {...this.props}
                    />
                )}
            </div>
            </>
    )
    }
}

export default EventsList