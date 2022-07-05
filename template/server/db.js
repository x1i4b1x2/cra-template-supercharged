const { v4 } = require('uuid');

module.exports = () => {
  const data = { todos: [] };
  for (let index = 0; index < 3; index += 1) {
    const userId = v4();
    const id = v4();
    const title = v4();
    data.todos.push({ userId, id, title, completed: false });
  }
  return data;
}
