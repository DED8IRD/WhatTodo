import React from 'react';
import Todo from './Todo'

export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeAll}>Clear todos</button>
        <ul>
          {(this.props.todos ? 
            this.props.todos.map(todo => (
              <Todo 
                todo={todo} 
                removeTodo={this.props.removeTodo}
                key={todo} 
              />
            )) 
            : "Nothing to do."
          )}
        </ul>
      </div>    
    )
  }
}
