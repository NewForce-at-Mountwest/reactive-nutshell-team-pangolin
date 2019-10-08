import React, { Component } from "react"
import EventsManager from "../../modules/EventsManager"



class EventsEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        date: "",
        location: "",
        userId: localStorage.getItem("userId"),
        loadingStatus: true,
    };



    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEvent = {
            id: this.props.match.params.eventsId,
            name: this.state.name,
            date: this.state.date,
            location: this.state.location,
            userId: localStorage.getItem("userId")
        };

        EventsManager.update(editedEvent)
            .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
        EventsManager.getOne(this.props.match.params.eventsId)
            .then(event => {
                this.setState({
                    name: event.name,
                    date: event.date,
                    location: event.location,
                    userId: localStorage.getItem("userId")
                });
            });
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
                            <p><input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                value={this.state.name}
                            />
                                <label htmlFor="name">Event Name</label></p>

                            <p><input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />
                                <label htmlFor="date">Date</label></p>

                                <p><input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="location"
                                value={this.state.location}
                            />
                                <label htmlFor="location">Location</label></p>



                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEvent}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default AnimalEditForm