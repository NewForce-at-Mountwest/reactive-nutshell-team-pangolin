const remoteURL = "http://localhost:5002"

export default {

  getAll() {
    return fetch(`${remoteURL}/chat`)
      .then(result => result.json())
  },

  get(id) {
    return fetch(`${remoteURL}/chat/${id}`)
      .then(result => result.json())
  },

  delete(id) {
    return fetch(`${remoteURL}/chat/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },

  update(editedMessage) {
    return fetch(`${remoteURL}/chat/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessage)
    }).then(data => data.json());
  },

  getAllChatUser() {
    return fetch(`${remoteURL}/chat?_expand=user`)
      .then(result => result.json())
  },

  postMessage(newMessage) {
    return fetch(`${remoteURL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(data => data.json())
}

}