import React from 'react'

export default class App extends React.Component {
  render() {
    let app = {
      title: 'WhatTodo',
      subtitle: 'Decide what to do next.',
      todos: ['wash cat', 'burn mail', 'terrorize neighbor']    
    }

    // app = {}

    return (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h3>{app.subtitle}</h3>}
        <ul>
          {(app.todos ? 
            app.todos :
            "Nothing to do."
          )}
        </ul>
      </div>
    )
  }
}

