import React from 'react';

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this)  
    this.onInputChange = this.onInputChange.bind(this)	
    this.state = {
      input: '',
      error: undefined
    }
	}

  // event handler for input value change
  onInputChange(evt) {
    const input = evt.target.value
    this.setState(() => ({
      input: input
    }))
  } 
   
  // event handler for form submission    
  onFormSubmit(evt) {
    evt.preventDefault(); 
    const todo = this.state.input
    let error
    if (todo) {
      if (this.props.todos.find((item) => item.text === todo) > -1) {
        console.log('duplicate')
        error = 'Error: Duplicate todo.'
      } else {
        this.props.addTodo(todo)
      }
    } 
    this.setState(() => ({
      input: '',
      error: error
    }))
  }

	render() {
		return (
      <form onSubmit={this.onFormSubmit}>
        <input 
          className='main-input'
          type='text' 
          name='todo'
          placeholder='Enter a task...'
          value={this.state.input}
          onChange={this.onInputChange}
        />
        <button className='hidden'>+</button>
        {this.state.error && <p style={{color: 'darkred'}}>{this.state.error}</p>}        
      </form> 				
		);
	}
}
