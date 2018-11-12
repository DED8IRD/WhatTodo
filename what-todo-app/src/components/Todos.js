import React from 'react';
import Todo from './Todo'

export default class Todos extends React.Component {
  render() {
    return (
      <ul>
        {(this.props.todos ? 
          this.props.todos.map(todo => <Todo todo={todo} key={todo} />) :
          "Nothing to do."
        )}
      </ul>    
    )
  }
}
