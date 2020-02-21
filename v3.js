console.log("hello from v3");
var todos = {
  todos : ["todo1","todo2","todo3"],
  displayTodos : function(){
    console.log("My Todos",this.todos);
  },
  addTodos : function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo : function(position,newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo : function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
}