var todos = [];

function displayTodos() {
  console.log("My todos:", todos);
}

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
