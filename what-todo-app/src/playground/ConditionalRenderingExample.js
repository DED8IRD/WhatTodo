// User profile example

// Conditionals with JSX:
// - functional conditional (if statement in function)
// - ternary operator (cond ? if : else)
// - logical AND operator (condition && template)
import React from 'react';

const ConditionalRenderingExample = (props) => {
	let user = {
		name: 'Eunika Wu',
		age: '23',
		location: {'city':'Portland', 'state':'OR', 'country':'USA'},
	};

	// user = {} // test rendering

	const getLocation = (location) => {
		if (location) {
			return <p>Location: {Object.keys(location).map(key => location[key]).join(', ')}</p>
		}
	}

  return (
		<div>
			<h1>Hello {user.name ? user.name : 'Anon'}!</h1> 
			{user.age >= 18 && <p>Age: {user.age}</p>} 
			{getLocation(user.location)} 
		</div>
  )
}

export default ConditionalRenderingExample;




