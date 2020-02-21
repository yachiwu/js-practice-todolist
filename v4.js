// [] todoList.addTodo 應該增加 objects (todoList.addTodo should add objects)

// [] todoList.changeTodo 應該更新 the todoText 屬性 (todoList.changeTodo should change the todoText property)

// [] todoList.toggleComplete 應該改變 completed property (todoList.toggleComplete should change the completed property)

console.log("hello from v4");
var todos = {
  todos : [],
  displayTodos : function(){
    console.log("My Todos",this.todos);
  },
  addTodos : function(todoText){
    this.todos.push({
      todoText : todoText,
      completed : false
    });
    this.displayTodos();
  },
  changeTodo : function(position,todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo : function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },
  toggleComplete : function(position){
  this.todos[position].completed = !this.todos[position].completed;
  this.displayTodos();
  }
}