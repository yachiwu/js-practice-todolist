// [] 如果每個事項都是true(完成), 把全部變成false(未完成)

// [] 其他條件的話, 把全部變成true

// [] displayTodos 應該顯示 .todoText

// [] displayTodos 應該告知是否空白

// [] displayTodos 應該顯示是否完成

//== (比對值)
//=== (比對類別)

console.log("hello from v6");
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
          console.log("(✔)", this.todos[i].todoText);
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
  },
  toggleAll: function() {
    //建立變數紀錄共有幾個todo
    var todosNumber = this.todos.length;
    //建立變數紀錄有幾個已完成的todo
    var todosCompleted = 0;
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed == true) {
        todosCompleted += 1;
      }
    }
    //如果每個事項都是true(完成), 把全部變成false(未完成)
    if (todosCompleted === todosNumber) {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    }
    //其他條件的話, 把全部變成true
    else {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};
