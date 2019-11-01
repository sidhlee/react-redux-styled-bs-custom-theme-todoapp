import Todos from "../components/Todos";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { filters } from "../actions";

let filterTodos = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return [...todos];
    case filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  filteredTodos: filterTodos(state.todos, state.selectedFilter)
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
