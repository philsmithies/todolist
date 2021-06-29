import './styles.css';
import navBar from './navbar'
import inbox from './inbox'
import todoItems from './todoItems';

function component() {
console.log(todoItems.storage)
navBar()
inbox()
const content = document.getElementById('content')
return content;
}

document.body.appendChild(component());