import React from 'react'

export default class App extends React.Component {
  render() {
    let app = {
      title: 'WhatTodo',
      subtitle: 'Decide what to do next.',
      todos: ['wash cat', 'burn mail', 'terrorize neighbor']    
    }

    // event handler for form submission    
    const onFormSubmit = (evt) => {
      evt.preventDefault(); 
      const todo = evt.target.elements.todo.value;
      if (todo) {
        app.todos.push(todo);
        evt.target.elements.todo.value = '';
      }
      console.log(app.todos)
    }

    return (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h3>{app.subtitle}</h3>}
        
        {/*Form to add todo*/}
        <form onSubmit={onFormSubmit}>
          <input type='text' name='todo'/>
          <button>+</button>
        </form> 

        <ul>
          {(app.todos ? 
            app.todos.map(todo => <li key={todo}>{todo}</li>) :
            "Nothing to do."
          )}
        </ul>
      </div>
    )
  }
}

