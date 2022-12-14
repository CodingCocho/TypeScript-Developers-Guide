import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo
{
  completed: boolean;
  id: number;
  title: string;
}

axios.get(url).then(response => 
  {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  });

  const logTodo = (id: number, title: string, completed: boolean) =>
  {
    console.log(`
      The Todo with ID: ${id} \n 
      Has a title of: ${title} \n
      It is finished? ${completed}
    `)
  }