import React from 'react';
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      <button 
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
              key={todo} 
            />
          )) 
          : "Nothing to do."
        )}
      </ul>
    </div>    
  )
}

export default Todos