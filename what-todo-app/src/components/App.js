import React from 'react'

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
  }

  // #3 update state
  addTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <Todos />
        <Decision />  
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      {/* 
        <h1>{this.state.title}</h1>
        {this.state.subtitle && <h3>{this.state.subtitle}</h3>}       
      */}
      </div>
    );
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)    
  }
   
  // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault(); 
    const todo = evt.target.elements.todo.value
    if (todo) {
      // this.addTodo(todo)
      evt.target.elements.todo.value = ''
      console.log(this.state.todos)
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' name='todo'/>
        <button>+</button>
      </form>         
    );
  }
}

class Todos extends React.Component {
  render() {
    return (
      <ul>
        <Todo />
        {/*(this.state.todos ? 
          this.state.todos.map(todo => <Todo />) :
          "Nothing to do."
        )*/}
      </ul>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <div>
        <li>todo</li>
        {/*
        <li key={todo}>{todo}</li>
        */}
      </div>
    );
  }
}

class Decision extends React.Component {
  render() {
    return (
      <button>Decide</button>
    );
  }
}