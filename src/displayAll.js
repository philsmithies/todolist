import todoItems from './todoItems';
import inbox from './inbox'
import { format } from 'date-fns'
import { parseISO } from 'date-fns' 

function displayAll() {
  const displayAll = document.createElement('div');

  todoItems.storage.forEach((x, i) => {
    const todoItem = document.createElement('div')
    const noDateDiv = document.createElement('div'); 
    const todoText = document.createElement('p')
    const removeItem = document.createElement('button')
    const noDate = document.createElement('p')

    todoItem.id = 'todoItem'

    noDateDiv.id = 'noDateDiv'
    displayAll.id = 'allContainer'

    removeItem.innerText = 'x'
    removeItem.addEventListener('click', () => {
      todoItems.storage.splice(i, 1)
      console.log(todoItems.storage)
      inbox()
    })

    todoText.innerText = `${x.item} ${x.date ? x.date : ''}`
    todoText.id = 'todoListItem'

    if (!x.date) {
      noDate.innerText = 'No Date'
      noDate.addEventListener('click', () => {
        noDate.style.display = 'none'
        const dateEntry = document.createElement('input')
        dateEntry.setAttribute('type', 'date')
        displayAll.appendChild(dateEntry)
        dateEntry.addEventListener('change', () =>{
          let dateInput = parseISO(dateEntry.value)
          console.log(todoItems.storage)
          x.date = (format(dateInput, 'dd/MM/yyyy'))
          inbox()
        })
      })
    }
    todoItem.appendChild(noDate)
    todoItem.appendChild(removeItem)
    todoItem.appendChild(todoText)
    todoItem.appendChild(noDateDiv)

    displayAll.appendChild(todoItem)
  })

  return displayAll
}

  
export default displayAll
