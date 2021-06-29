const todoItems = (() => {
  const storage = [{item: 'this is a todo', date: ''}, {item: 'this is another todo', date: ''}]
  return {
    storage: storage
  }
})();

export default todoItems

