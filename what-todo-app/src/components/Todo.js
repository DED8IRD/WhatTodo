import React from 'react';

const Todo = (props) => {
	return (
		<li>
			<i 
				className='fa fa-times'
				onClick={() => props.removeTodo(props.todo)}
			></i>
			<p>{props.todo}</p>
		</li>
	)	
}

export default Todo;
