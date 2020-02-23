console.log("hello from v10");
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
    view.displayTodos();
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    // this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    // this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    // this.displayTodos();
  },
  toggleComplete: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
    // this.displayTodos();
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
    // this.displayTodos();
  }
};

//MVC架構
//Controller
var controller = {
  displayTodos: function() {
    view.displayTodos();
  },
  toggleAll: function() {
    todos.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTodoText = document.getElementById("addTodoTextInput");
    todos.addTodo(addTodoText.value);
    addTodoText.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPosition = document.getElementById("changeTodoPosition");
    var changeTodoText = document.getElementById("changeTodoText");
    todos.changeTodo(changeTodoPosition.value, changeTodoText.value);
    changeTodoPosition.value = "";
    changeTodoText.value = "";
    view.displayTodos();
  },
  deleteTodo: function(index) {
    var deleteTodoPosition = document.getElementById("deleteTodoPosition");
    // todos.deleteTodo(deleteTodoPosition.value);
    todos.deleteTodo(index);
    deleteTodoPosition.value = "";
    view.displayTodos();
  },
  toggleComplete: function() {
    var toggleCompletePosition = document.getElementById(
      "toggleCompletePosition"
    );
    todos.toggleComplete(toggleCompletePosition.value);
    toggleCompletePosition.value = "";
    view.displayTodos();
  }
};

//View
var view = {
  displayTodos: function() {
    //選取到ul的位置
    var todoUl = document.querySelector("ul");
    todoUl.innerHTML = "";
    for (var i = 0; i < todos.todos.length; i++) {
      //創造li
      var todoLi = document.createElement("li");
      var todo = todos.todos[i];
      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(✔)" + todo.todoText;
      } else {
        todoTextWithCompletion = "(  )" + todo.todoText;
      }
      todoLi.innerHTML = todoTextWithCompletion;
      todoLi.id = i;
      todoLi.appendChild(this.deleteButton());
      // //test <li>
      // console.log(todoLi);
      //將li append到<ul>
      todoUl.appendChild(todoLi);
      //test <ul>
      // console.log(todoUl);
    }
  },
  deleteButton: function() {
    var deleteButton = document.createElement("Button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("deleteButton");
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todoUl = document.querySelector("ul");
    todoUl.addEventListener("click", function(event) {
      console.log(event);
      //get element click
      var elementClicked = event.target;
      //check elementClicked is button
      if (elementClicked.className == "deleteButton") {
        // console.log(typeof elementClicked.parentNode.id);
        controller.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
