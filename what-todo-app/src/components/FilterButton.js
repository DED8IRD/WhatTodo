// FilterButton.js
import React from 'react'

const FilterButton = (props) => {
  return (
    <button
    	onClick={props.setVisibilityFilter(props.filter)}
    	disabled={props.active}
    >
    	{props.children}
  	</button>
  )
}

export default FilterButton