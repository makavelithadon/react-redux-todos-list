import React from 'react'
import Todo from "./../Todo/";

const TodosList = ({
  todos,
  onClickTodo
}) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onClickTodo(todo.id)}/>
        ))
      }
    </ul>
  )
}

export default TodosList
