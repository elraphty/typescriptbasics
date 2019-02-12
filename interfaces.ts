// function showTodo(todo: {title: string, text: string}) {
//   console.log(todo.title + ' ' + todo.text);
// }

interface Todo {
  title: string,
  text: string
}

let myTodo = {title: 'Trash', text: 'Take out my trash'};

function showTodo(todo: Todo) {
  console.log(todo.title + ' ' + todo.text);
}

console.log(showTodo(myTodo));