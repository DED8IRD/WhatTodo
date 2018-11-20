// todoReducer.js
// reducer composition for updating todos state

import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/actions'

export default const todos = (state=[], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state.todos, {text: action.text, completed: false}]
		case TOGGLE_TODO:
			return state.todos.map((todo, idx) => (
				idx === action.idx 
				?	{text: todo.text, completed: !todo.completed}
				: todo
			))
		default:
			return state
	}
}