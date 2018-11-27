import React from 'react';

const Todo = (props) => {
	return (
		<li>
			<button onClick={() => props.toggleTodo(props.todo.text)}>✓</button>
			<button onClick={() => props.removeTodo(props.todo.text)}>×</button>
			<p 
				style={{
					textDecoration: (props.todo.completed ? 'line-through' : 'none')
				}}
			>
				{props.todo.text}
			</p>
		</li>
	)	
}

export default Todo;
