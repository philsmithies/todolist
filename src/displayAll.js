import todoItems from './todoItems';
import inbox from './inbox'

function displayAll() {
  const displayAll = document.createElement('div');

  todoItems.storage.forEach((x, i) => {
    const todoItem = document.createElement('p')
    const removeItem = document.createElement('button')
    removeItem.innerText = 'x'

    removeItem.addEventListener('click', () => {
      todoItems.storage.splice(i, 1)
      console.log(todoItems.storage)
      inbox()
    })

    const dateEntry = document.createElement('input')
    dateEntry.setAttribute('type', 'date')

    dateEntry.addEventListener('change', () =>{
      x.date = dateEntry.value
      console.log(todoItems.storage)
      inbox()
    })

    todoItem.innerText = `${x.item} date: ${x.date}`
    todoItem.id = 'todoListItem'
    displayAll.appendChild(todoItem)
    displayAll.appendChild(dateEntry)
    displayAll.appendChild(removeItem)
  })

  return displayAll
}

  
export default displayAll
