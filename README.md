# Data Binding with Component State

In this portion, we explore data binding using **component state** in a Counter app.
You can have two-way communication between parent to child components using component `state`.

Read more about state [here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Component%20State.md).

#### Steps for setting up and updating component state:
1. Set up default state object
`this.state = {prop: defaultval, ...}`
2. Bind all methods in constructor
`this.method = this.method.bind(this)`
3. Update state based on event
`this.setStatesetState((prevState) => ({updated state obj}))`

Old method for step 3: pass object directly into setState (rumored to be deprecated)

In [`./what-todo-app/src/playground/Counter.js`](`./what-todo-app/src/playground/Counter.js`):
```jsx
import React from 'react';

export default class Counter extends React.Component {
	// define constructor to initialize default state object
	constructor(props) {
		super(props);

		// #1 set up default state object with the counter property and its default value 0 
		this.state = { 	
			count: 0
		}

		// #2 bind method
		this.addOne = this.addOne.bind(this)
	}

	// #3 update state
	addOne() {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				{/* #3 update state on button click */}
				<button id='inc-btn' className='button' onClick={this.addOne}>+1</button>
			</div>
		);
	}
}
```

___
In this section, we want enable two-way data binding in our WhatTodo app by using component state:

1. Set up a default state object in `App.js` with default values for the following attributes:
	- `title`  
	- `subtitle` 
	- `todos`
put 
2. Define an `addTodo()` method. Convert `onFormSubmit()` into a method. Bind `addTodo and onFormSubmit` in our app's `constructor()`. 
	- Hint: Use `Array.concat()` to update `todos`

3. Update state based on events: `setState()` within `addTodo()` 

