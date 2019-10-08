import React, { Component } from 'react'
import ChatCard from './ChatCard'
import ChatManager from '../modules/ChatManager'

class ChatList extends Component {
    state = {
        messages: [],
        newMessage: "",
        message: "",
        messageId: "",
        userId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        ChatManager.getAllChatUser().then(messages => {
            this.setState({ messages: messages
            }
            )
        })
    }

    editMessage = () => {
        const editedMessage = {
            message: this.state.message,
            id: this.state.messageId,
            userId: this.state.userId
        }
        ChatManager.update(editedMessage)
            .then(ChatManager.getAllChatUser).then(messages => {
                this.setState({ messages: messages, message: "", messageId: "", userId: "" })
            }
            )
    }

    deleteMessage = id => {
        ChatManager.delete(id)
            .then(() => {
                ChatManager.getAllChatUser()
                    .then((newMessages) => {
                        this.setState({
                            messages: newMessages
                        })
                    })
            })
    }

    renderEditForm = message => {
        this.setState({ message: message.message, messageId: message.id, userId: message.user.id })
    }

    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.newMessage === "") {
            window.alert("Please input a message");
        } else {
            ;
            const singleMessage = {
                message: this.state.newMessage,
                userId: localStorage.getItem("userId")
            };

            // Create the Message and redirect user to Message list
            ChatManager.postMessage(singleMessage)
                .then(ChatManager.getAllChatUser).then(messages => {
                    this.setState({ messages: messages })
                })
        }
    };

    render() {
        return (
            <div className="container-cards">
                {this.state.messages.map(message =>

                    this.state.messageId === message.id ? (
                        <>
                            <input
                                type="text"
                                onChange={this.handleFieldChange}
                                id="message"
                                value={this.state.message}
                            />

                            <button
                                type="button"
                                onClick={this.editMessage}>
                                Save</button>

                        </>
                    ) : (
                            <ChatCard
                                key={message.id}
                                message={message}
                                deleteMessage={this.deleteMessage}
                                renderEditForm={this.renderEditForm} />)
                )}



                <div className="input-field">
                    <form>
                        <input
                            type="text"
                            placeholder="enter message here"
                            id="newMessage"
                            onChange={this.handleFieldChange}
                        />
                        <button
                            onClick={this.constructNewMessage}
                        >Send</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default ChatList