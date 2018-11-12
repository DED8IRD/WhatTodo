import React from 'react';

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)		
	}
   
  // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault(); 
    const todo = evt.target.elements.todo.value
    if (todo) {
      // We no longer have access to addTodo in this scope.
      // this.addTodo(todo) 
      evt.target.elements.todo.value = ''
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
