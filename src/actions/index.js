import uuid from "uuid";

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER
} from './../types'

export const addTodo = todo => {
  todo = {
    ...todo,
    id: uuid.v4(),
    completed: false
  }
  fetch('http://localhost:8882/todo', {
    method: 'POST',
    body: JSON.stringify({ todo }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => console.info(res))
  .catch(err => console.error(err))
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})

export const fetchTodos = dispatch => {
  dispatch(fetchTodosBegin());
  fetch('http://localhost:8882/todos')
    .then(res => res.json())
    .then(res => {
      dispatch(fetchTodosSuccess(res.todos));
    })
    .catch(err => dispatch(fetchTodosError(err)));
}


export const fetchTodosBegin = () => ({
  type: 'FETCH_TODOS_BEGIN'
});

export const fetchTodosSuccess = todos => ({
  type: 'FETCH_TODOS_SUCCESS',
  payload: { todos }
});

export const fetchTodosError = error => ({
  type: 'FETCH_TODOS_ERROR',
  payload: { error }
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
})
