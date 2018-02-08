import { SET_VISIBILITY_FILTER } from './../types'

const visibilityFilter = (
  state = 'all',
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default visibilityFilter;

export const getVisibilityFilter = state => state
