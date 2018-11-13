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
      todos: ['dehumanize yourself', 'face to bloodshed', 'rejoice']
    }
    // #2 bind methods
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.chooseRandom = this.chooseRandom.bind(this)
  }

  // #3 update state
  addTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat([todo])
    }))
  }

  removeTodo(todo) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(item => item !== todo)
    }))    
  }

  removeAll() {
    this.setState((prevState) => ({
      todos: []
    }))
  }

  chooseRandom() {
    const randomIdx = Math.floor(Math.random() * this.state.todos.length)
    alert(this.state.todos[randomIdx])
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <AddTodo 
          addTodo={this.addTodo}
        />
        <Todos 
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          removeAll={this.removeAll}
        />
        <Decision 
          empty={!this.state.todos.length}
          chooseRandom={this.chooseRandom}
        />  
      </div>
    )
  }
}