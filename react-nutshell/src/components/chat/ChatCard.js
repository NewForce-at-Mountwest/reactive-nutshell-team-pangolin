import React, { Component } from 'react';

class ChatCard extends Component {

    render() {
        return (
            <div className="card">
                <h4>Name: {this.props.message.user.name}</h4>
                <p>Message: {this.props.message.message}</p>
                <div className="button-container">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        );
    }
}

export default ChatCard;