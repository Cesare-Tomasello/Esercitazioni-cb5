fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) =>
    data.map((users) =>
      console.log(
        users.name +
          "\n" +
          Object.values(users.address) +
          "\n" +
          users.address.city
      )
    )
  )
  .catch((e) => console.log("Errore"))
  .finally((f) => console.log("Done"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) =>
    data.map((todos) => console.log(todos.id + "\n" + todos.title))
  )
  .catch((e) => console.log("Errore"))
  .finally((f) => console.log("Done"));
