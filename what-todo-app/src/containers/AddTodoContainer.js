// AddTodoContainer.js
import {connect} from 'react-redux'
import {addTodo} from '../actions/actions'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => ({
	todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
	addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)
