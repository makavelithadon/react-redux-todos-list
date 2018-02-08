import React, { Component } from 'react'
import Todo from "./../Todo/";

class TodosList extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    const {
      onClickTodo,
      todos: {
        error,
        loading,
        items
      }
    } = this.props;
    if (error) return <div>Some error on fetching todos list</div>
    if (loading) return <div>Loading...</div>
    return (
      <ul>
        {
          items.map(todo => (
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
}

export default TodosList
