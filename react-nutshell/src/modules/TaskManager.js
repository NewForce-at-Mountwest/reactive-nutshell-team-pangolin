const remoteURL = "http://localhost:5002"

export default {
//fetch one task by id
  getOne(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
  },
  //fetch all unarchived tasks
  getAll() {
    return fetch(`${remoteURL}/tasks?userId=${localStorage.getItem("userId")}&&archived=false`).then(result => result.json())
  },
  //archive a task by id
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
  //unarchive a task by id...no button for this
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
  //post a new task to tasks database
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(data => data.json())
},
//edit a task object 
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