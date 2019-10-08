import React, { Component } from 'react';
import EventsManager from '../../modules/EventsManager';
// import LocationManager from '../../modules/LocationManager';
//import './AnimalForm.css'

class EventsForm extends Component {
    state = {
        name: "",
        date: "",
        location: "",
        userId: localStorage.getItem("userId"),
        loadingStatus: false,

    };


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create event      object, invoke the EventsManager post method, and redirect to the full animal list
    */
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.eventName === "" || this.state.eventDate === "" || this.state.eventLocation === "") {
            console.log(this.state.eventName, this.state.eventDate, this.state.eventLocation)
            window.alert("Please input event name, date and location.");
        } else {
            this.setState({ loadingStatus: true });
            const newEvent = {
                name: this.state.name,
                date: this.state.date,
                location: this.state.location,
                userId: localStorage.getItem("userId")
            };

            // Create the event and redirect user to event list
            EventsManager.post(newEvent)
                .then(() => this.props.history.push("/events"));
        }
    };

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
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                //id must exactly match variable in state
                                id="name"
                                placeholder="Event Name"
                            />
                            <label htmlFor="name">Event Name</label>
                            <br></br>

                            <p><input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                placeholder="Date"
                            /><label htmlFor="date">Event Date</label></p>


                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="location"
                                placeholder="Event Location"
                            />
                            <label htmlFor="location">Event Location</label>
                            <br></br>


                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEvent}

                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EventsForm