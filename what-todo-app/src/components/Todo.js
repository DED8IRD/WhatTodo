import React from 'react';

const Todo = (props) => {
	return (
		<li>
			<button onClick={() => props.removeTodo(props.todo)}>×</button>
			<p>{props.todo}</p>
		</li>
	)	
}

export default Todo;
