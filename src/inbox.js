import createTodo from './todo'

function createInbox() {

  const inbox = document.createElement('div');

  const heading = document.createElement('h1')
  heading.innerText = 'Inbox'
  inbox.appendChild(heading)
  inbox.appendChild(createTodo())

  return inbox
}

function loadInbox(){
  const content = document.getElementById('content')
  content.textContent = ''
  content.appendChild(createInbox())
}

export default loadInbox