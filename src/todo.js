function createTodo() {
  const newTodo = document.createElement('div')
  const addTask = document.createElement('button')
  addTask.innerText = '+ Add Task'
  addTask.id = 'todo'
  console.log(addTask)
  newTodo.appendChild(addTask)
  return newTodo
}

  
export default createTodo
