// rootReducer.js
// Combines smaller reducers into single object. 
// We no longer need to know a complete initial state.

import todos from './todoReducer'
import visibilityFilter from './visibilityFilterReducer'
import {combineReducers} from 'redux'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp

// // The following lines do the same as the above
// export default todoApp(state={}, action) {
// 	return {
// 		todos: todos(state.todos, action),
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action)
// 	}
// }
