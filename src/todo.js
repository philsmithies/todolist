import todoItems from './todoItems';
import inbox from './inbox'

function createTodo() {
  const newTodo = document.createElement('div')
  newTodo.id = 'newTodo'
  const addTask = document.createElement('button')
  addTask.innerText = '+ Add Task'
  addTask.id = 'todo'

  addTask.addEventListener('click', () =>{
    addTask.style.display = 'none'

    const enterTodo = document.createElement('div')
    enterTodo.id = 'enterTodo'
     
    const textEntry = document.createElement('input')
    textEntry.setAttribute('type', 'text')
    textEntry.id = 'textEntry'

    const toDoOptions = document.createElement('div')
    toDoOptions.id = 'toDoOptions'

    const addBtn = document.createElement('button')
    addBtn.innerText = 'Add'
    addBtn.id = 'addBtn'

    function resetTodo() {
      textEntry.value = ''
      enterTodo.style.display = 'none'
      addTask.style.display = 'block'
    }

    addBtn.addEventListener('click', () => {
      todoItems.storage.push({item:`${textEntry.value}`, date: ''})
      console.log(todoItems.storage)
      resetTodo()
      inbox()
    })

    const cancelBtn = document.createElement('button')
    cancelBtn.innerText = 'Cancel'
    cancelBtn.id = 'cancelBtn'

    cancelBtn.addEventListener('click', () => {
      resetTodo()
    })
    
    enterTodo.appendChild(textEntry)
    toDoOptions.appendChild(addBtn)
    toDoOptions.appendChild(cancelBtn)
    enterTodo.appendChild(toDoOptions)
    newTodo.appendChild(enterTodo)
  })

  newTodo.appendChild(addTask)

  return newTodo
}

  
export default createTodo
