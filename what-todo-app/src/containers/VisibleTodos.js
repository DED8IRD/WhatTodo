// VisibleTodosContainer.js
import {connect} from 'react-redux'
import {
	toggleTodo, 
	removeTodo,
	removeAll,
	VisibilityFilters
} from '../actions/actions'
import Todos from '../components/Todos'

const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters

const filterTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ACTIVE:
			return todos.filter((todo) => !todo.completed)
		case SHOW_COMPLETED:
			return todos.filter((todo) => todo.completed)
		default:
			return todos
	}
}

const mapStateToProps = (state) => ({
	todos: filterTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
	toggleTodo,
	removeTodo,
	removeAll
}

const VisibleTodos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos)

export default VisibleTodos