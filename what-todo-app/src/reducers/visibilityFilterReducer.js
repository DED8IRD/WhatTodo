// visibilityFilterReducer.js
// reducer composition for updating todos state

import {
	VisibilityFilters, 
	SET_VISIBILITY_FILTER
} from '../actions/actions'

const {SHOW_ALL} = VisibilityFilters
export default function visibilityFilter(state=SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}