// Footer.js
import React from 'react'
import {VisibilityFilters} from '../actions/actions'
import Filter from '../containers/Filter'

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters

const Footer = (props) => {
  return (
  	<div>
	    <span>
	    	<Filter filter={SHOW_ALL}>All</Filter>
	    	<Filter filter={SHOW_ACTIVE}>Active</Filter>
	    	<Filter filter={SHOW_COMPLETED}>Completed</Filter>
	    </span>
    </div>
  )
}

export default Footer