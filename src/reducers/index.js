import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// selectors
import * as fromTodos from "./todos";
import * as fromVisibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter)

export const getVisibilityFilter = (state, filter) => fromVisibilityFilter.getVisibilityFilter(state.visibilityFilter)
