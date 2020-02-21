// variable is a place to store things
var todos = ['item1', 'item2', 'item3'] 

// display todos
console.log('item1', 'item2')
console.log('my todos:', todos) 

//able to add todos
todos.push('new todos')
console.log(todos)

// change a todo
todos[0] 
todos[0] = 'updated'
console.log(todos)

// Delete todos
todos.splice(0,1) 
console.log(todos)