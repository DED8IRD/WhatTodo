import React from 'react';

export default class Todo extends React.Component {
	render() {
		return (
			<div>
				<li>This is where a single todo will go.</li>
			</div>
		);
	}

	// // We have no access to todo in this scope.
	// render() {
	// 	return (
	// 		<li key={todo}>{todo}</li>
	// 	)	
	// }
}
