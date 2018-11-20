// actions.js

// action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action creators
export const addTodo = (text) => ({
	type: ADD_TODO,
	text
}) 

export const removeTodo = (idx) => ({
	type: REMOVE_TODO,
	idx
})

export const setVisibilityFilter = (filter) => ({
	type: SET_VISIBILITY_FILTER,
	filter
}) 

