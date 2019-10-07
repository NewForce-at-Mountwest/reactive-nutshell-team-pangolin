const remoteURL = "http://localhost:5002"

export default {
    getOne(userName) {
        return fetch(`${remoteURL}/users?name=${userName}`).then(result => result.json())
    },

    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    getAll() {
        return fetch(`${remoteURL}/users`).then(result => result.json()
        )
    },
}