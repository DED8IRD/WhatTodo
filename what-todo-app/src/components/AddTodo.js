import React from 'react';

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)	
    this.state = {
      error: undefined
    }	
	}
   
  // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault(); 
    const todo = evt.target.elements.todo.value
    if (todo) {
      const error = this.props.addTodo(todo) 
      evt.target.elements.todo.value = ''
      this.setState(() => ({
        error: error
      }))
    }
  }

	render() {
		return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' name='todo'/>
        <button>+</button>
        {this.state.error && <p>{this.state.error}</p>}        
      </form> 				
		);
	}
}
