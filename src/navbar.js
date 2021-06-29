
function createNav() {
  const navBarContainer = document.createElement('div')
  navBarContainer.innerHTML = `
  <nav><h1>Just ToDoIt</h1></nav>
  `
  return navBarContainer
}

function loadNav() {
    const navBarElement = document.getElementById('navbar')
    navBarElement.appendChild(createNav())
}

    
export default loadNav