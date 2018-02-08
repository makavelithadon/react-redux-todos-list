import TodosList from "./../../components/TodosList";
import { getVisibleTodos, getVisibilityFilter } from "./../../reducers";
import { toggleTodo, fetchTodos } from "./../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: getVisibleTodos(state, getVisibilityFilter(state))
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => fetchTodos(dispatch),
  onClickTodo: id => dispatch(toggleTodo(id))
})

const ContainerVisibleTodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList)

export default ContainerVisibleTodosList
