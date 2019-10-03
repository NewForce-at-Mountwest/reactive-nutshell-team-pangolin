import React, { Component } from 'react'
import ChatCard from './ChatCard'
import ChatManager from '../modules/ChatManager'

class ChatList extends Component {
    state = {
        messages: [],
        users: [],
        newMessage: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        ChatManager.getAllChatUser().then(messages => {
            this.setState({ messages: messages }
            )
        })
    }

    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.newMessage === "") {
            window.alert("Please input a message");
        } else {
            this.setState({ loadingStatus: true });
            const singleMessage = {
                message: this.state.newMessage,
                userId: 1
            };

            // Create the Message and redirect user to Message list
            ChatManager.postMessage(singleMessage)
        }
    };

    render() {
        return (
            <div className="container-cards">
                {this.state.messages.map(message =>
                    <ChatCard key={message.id} message={message} />)}
                <div className="input-field">
                    <form>
                        <input
                            type="text"
                            placeholder="enter message here"
                            id="newMessage"
                            onChange={this.handleFieldChange}
                        />
                        <button
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewMessage}
                        >Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatList