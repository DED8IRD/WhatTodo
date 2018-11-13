import React from 'react';

const Todo = (props) => {
	return (
		<li>
			<p>{props.todo}</p>
			<button onClick={() => props.removeTodo(props.todo)}>×</button>
		</li>
	)	
}

export default Todo;
