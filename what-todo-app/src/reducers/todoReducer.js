// todoReducer.js
// reducer composition for updating todos state

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from '../actions/actions'

export default function todos(state=[], action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state.todos, {text: action.text, completed: false}]
		case TOGGLE_TODO:
			return state.todos.map((todo) => (
				todo.text === action.text
				? {text: todo.text, completed: !todo.completed}
				: todo
			))
		case REMOVE_TODO:
			return state.todos.filter((todo) => todo.text !== action.text)
		default:
			return state
	}
}