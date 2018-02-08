import uuid from "uuid";

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from './../types'

const todo = (
  state,
  action
) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed
      };
      break;
    default:
      return state;
      break;
  }
}

const todos = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          ...action.payload,
          id: uuid.v4(),
          completed: false
        }
      ];
      break;
    case TOGGLE_TODO:
      const foundTodo = state.find(todo => todo.id === action.payload)
      const foundTodoIndex = state.findIndex(todo => todo.id === action.payload)
      return [
        ...state.slice(0, foundTodoIndex),
        todo(foundTodo, action),
        ...state.slice(foundTodoIndex+1),
      ];
      break;
    case DELETE_TODO:
      const index = state.findindex(todo => todo.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index+1)
      ];
      break;
    default:
      return state;
      break;
  }
}

export const getVisibleTodos = (
  state,
  filter
) => {
  switch (filter) {
    case 'all':
      return state;
      break;
    case 'completed':
      return state.filter(todo => todo.completed);
      break;
    case 'active':
      return state.filter(todo => !todo.completed);
      break;
    default:
      throw new Error('wrong filter was passed.')
      break;
  }
}

export default todos;
