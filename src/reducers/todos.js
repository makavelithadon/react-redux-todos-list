import { combineReducers } from "redux";

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
    default:
      return state;
  }
}

const items = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case TOGGLE_TODO:
      const foundTodo = state.find(todo => todo.id === action.payload)
      const foundTodoIndex = state.findIndex(todo => todo.id === action.payload)
      return [
        ...state.slice(0, foundTodoIndex),
        todo(foundTodo, action),
        ...state.slice(foundTodoIndex+1),
      ];
    case DELETE_TODO:
      const index = state.findindex(todo => todo.id === action.payload);
      return [
        ...state.slice(0, index),
        ...state.slice(index+1)
      ];
    case 'FETCH_TODOS_SUCCESS':
      return action.payload.todos;
    case 'FETCH_TODOS_ERROR':
      return [];
    default:
      return state;
  }
}

export const error = (
  state = null,
  action
) => {
  switch (action.type) {
    case 'FETCH_TODOS_ERROR':
      return action.payload.error;
    case 'FETCH_TODOS_BEGIN':
      return null;
    case 'FETCH_TODOS_SUCCESS':
      return null;
    default:
      return state;
  }
}

export const loading = (
  state = false,
  action
) => {
  switch (action.type) {
    case 'FETCH_TODOS_BEGIN':
      return true;
    case 'FETCH_TODOS_ERROR':
      return false;
    case 'FETCH_TODOS_SUCCESS':
      return false;
    default:
      return state;
  }
}

export const getVisibleTodos = (
  state,
  filter
) => {
  switch (filter) {
    case 'all':
      return state;
    case 'completed':
      return {
        ...state,
        items: state.items.filter(todo => todo.completed)
      };
    case 'active':
    return {
      ...state,
        items: state.items.filter(todo => !todo.completed)
      };
    default:
      throw new Error('Wrong filter was passed.')
  }
}

export default combineReducers({
  loading,
  error,
  items
});
