import React from 'react'
// import Counter from '../playground/Counter'

export default class App extends React.Component {
  // define constructor to initialize default state object
  constructor(props) {
    super(props)
    // #1 set up default state object
    this.state = {
      title: 'WhatTodo',
      subtitle: 'Decide what to do next.',
      todos: []
    }
    // #2 bind methods
    this.addTodo = this.addTodo.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // #3 update state
  addTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }))
  }

    // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault(); 
    const todo = evt.target.elements.todo.value
    if (todo) {
      this.addTodo(todo)
      evt.target.elements.todo.value = ''
      console.log(this.state.todos)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.state.subtitle && <h3>{this.state.subtitle}</h3>}
        
        {/* #3 update state on form submission */}
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='todo'/>
          <button>+</button>
        </form> 

        <ul>
          {(this.state.todos ? 
            this.state.todos.map(todo => <li key={todo}>{todo}</li>) :
            "Nothing to do."
          )}
        </ul>
      </div>
    )
  }

  // render() {
  //   return <Counter />
  // }
}

