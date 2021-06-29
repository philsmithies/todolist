import './styles.css';
import navBar from './navbar'
import inbox from './inbox'

function component() {
navBar()
inbox()
const content = document.getElementById('content')
return content;
}

document.body.appendChild(component());