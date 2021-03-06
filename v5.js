// [] displayTodos 應該顯示 .todoText

// [] displayTodos 應該告知是否空白

// [] displayTodos 應該顯示是否完成

//== (比對值)
//=== (比對類別) 

console.log("hello from v5");
var todos = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your list is empty");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === false) {
          console.log("()", this.todos[i].todoText);
        } else {
          console.log("(x)", this.todos[i].todoText);
        }
      }
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleComplete: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  }
};
