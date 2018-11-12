import React from 'react'
import Header from './Header'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Decision from './Decision'

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