import React from 'react';
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      <button 
        className='span-btn'
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
              removeTodo={props.removeTodo}
              key={todo} 
            />
          )) 
          : <li>Nothing to do.</li>
        )}
      </ul>
    </div>    
  )
}

export default Todos