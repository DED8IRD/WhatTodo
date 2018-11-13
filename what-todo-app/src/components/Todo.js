import React from 'react';

export default class Todo extends React.Component {
	render() {
		return (
			<li>
				<p>{this.props.todo}</p>
				<button onClick={() => this.props.removeTodo(this.props.todo)}>×</button>
			</li>
		)	
	}
}
