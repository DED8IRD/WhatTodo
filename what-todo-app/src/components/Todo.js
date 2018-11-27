import React from 'react';

const Todo = (props) => {
	return (
		<li
			className={(props.todo.completed ? 'completed' : '')}
		>
			<i 
				className='fa fa-times'
				onClick={() => props.removeTodo(props.todo.text)}
			></i>
			<i 
				className='fa fa-check'
				onClick={() => props.toggleTodo(props.todo.text)}
			></i>			

			<p>{props.todo.text}</p>
		</li>
	)	
}

export default Todo;
