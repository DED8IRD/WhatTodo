import React from 'react';

export default class Todo extends React.Component {
	render() {
		return (
			<li key={this.props.todo}>{this.props.todo}</li>
		)	
	}
}
