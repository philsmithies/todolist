import createTodo from './todo'
import displayAll from './displayAll';

function createInbox() {

  const inbox = document.createElement('div');

  const heading = document.createElement('h1')
  heading.innerText = 'Inbox'
  inbox.appendChild(heading)
  inbox.appendChild(createTodo())
  inbox.appendChild(displayAll())

  return inbox
}

function loadInbox(){
  const content = document.getElementById('content')
  content.innerHTML = ''
  content.appendChild(createInbox())
}

export default loadInbox