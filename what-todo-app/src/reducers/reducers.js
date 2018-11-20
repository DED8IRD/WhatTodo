// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

export const todoApp = (state=initialState, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return {...state, ...{visibilityFilter: action.filter}}
		case ADD_TODO:
			const todos = [...state.todos, {action.text, completed: false}]
			return {...state, ...{todos: todos}}
		case TOGGLE_TODO:
			const todos = state.todos.map((todo, idx) => (idx === action.idx ? {todo.text, !todo.completed} : todo))
			return {...state, ...{todos: todos}}
		default:
			return state
	}
}