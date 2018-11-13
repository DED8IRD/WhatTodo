# Two-way Communication with Component Props Part 2

We want to enable two-way communication (parent-to-child and child-to-parent) between `App.js` and its child components. We can do this by passing methods that modify **component state** as **props** to child components. 

Read more about state [here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Component%20State.md).

#### Steps for setting up and updating component state:
1. Set up default state object
`this.state = {props: defaultval, ...}`
2. Bind all methods in constructor
`this.method = this.method.bind(this)`
3. Update state based on event
`this.setStatesetState((prevState) => ({updated state obj}))`

 Old method for step 3: pass object directly into setState (rumored to be deprecated)

___
In this section, we want enable two-way data binding within `App.js` and its child components. To do this, we want to:

1. Set up a default state object in `WhatTodoApp` with default values for the following attributes:
    - `title` 
    - `subtitle` 
    - `todos`

2. Define the following methods in our `App` component and bind them to its `constructor`:
    1. `addTodo(todo)` - adds `todo` from form to `this.state.todos`
        - Hint: Use `Array.concat()` to update `prevState.todos`
    2. `removeTodo(todo)` - removes `todo` from `this.state.todos`
        - Hint: Use `Array.filter()` to update `prevState.todos`
    3. `removeAll()` - resets `this.state.todos` to empty list
    4. `chooseRandom()` - alerts randomly selected todo


3. Update state based on events in the methods you defined in part 1

4. Pass the methods as props to the child components

___
Consider the following example for binding `addTodo`.
In [`App.js`](./what-todo-app/src/components/App.js):
```jsx
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
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <AddTodo 
          {/* #4 Pass this.addTodo() as prop to <AddTodo> */}
          addTodo={this.addTodo}
          }
        />
        <Todos 
          todos={this.state.todos}
        />
        <Decision />  
      </div>
    )
  }
}
```

In [`AddTodo.js`](./what-todo-app/src/components/AddTodo.js):
```jsx 
import React from 'react'

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)        
  }
   
  // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault() 
    const todo = evt.target.elements.todo.value
    if (todo) {
      {/* Call addTodo() from props */}
      this.props.addTodo(todo) 
      evt.target.elements.todo.value = ''
    }
  }
  

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' name='todo'/>
        <button>+</button>
      </form>               
    )
  }
}

```