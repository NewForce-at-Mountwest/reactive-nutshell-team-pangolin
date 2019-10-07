const remoteURL = "http://localhost:5002"

export default {
  getOne(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tasks?userId=${localStorage.getItem("userId")}&&archived=false`).then(result => result.json())
  },
  archive(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({archived: true})
    })
    .then(result => result.json())
  },
  // unarchive(id) {
  //   return fetch(`${remoteURL}/tasks/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({archived: false})
  //   })
  //   .then(result => result.json())
  // },
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(data => data.json())
},
update(editedTask) {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedTask)
  }).then(data => data.json());
}
}