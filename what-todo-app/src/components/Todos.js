import React from 'react';
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      <button 
        className='block-btn'
        onClick={props.removeAll}
        disabled={props.todos.length === 0}
      >
        Clear todos
      </button>
      <ul>
        {(props.todos.length ? 
          props.todos.map(todo => (
            <Todo 
              todo={todo} 
              toggleTodo={props.toggleTodo}
              removeTodo={props.removeTodo}
              key={todo.text} 
            />
          )) 
          : <li>Nothing to do.</li>
        )}
      </ul>
    </div>    
  )
}

export default Todos