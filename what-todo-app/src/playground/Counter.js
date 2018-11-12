// Counter Example
// Data binding with component state
import React from 'react';

export default class Counter extends React.Component {
	// define constructor to initialize default state object
	constructor(props) {
		super(props);

		// #1 set up default state object with the counter property and its default value 0 
		this.state = { 	
			count: 0
		}

		// #2 bind methods
		this.addOne = this.addOne.bind(this)
		this.minusOne = this.minusOne.bind(this)
		this.reset = this.reset.bind(this)
	}

	// #3 update state
	addOne() {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
	}

	minusOne() {
		this.setState((prevState) => ({
			count: prevState.count - 1
		}))
	}

	reset() {
		this.setState(() => ({
			count: 0
		}))
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				{/* #3 update state on button click */}
				<button id='inc-btn' className='button' onClick={this.addOne}>+1</button>
				<button id='dec-btn' className='button' onClick={this.minusOne}>-1</button>
				<button id='reset-btn' className='button' onClick={this.reset}>Reset</button>
			</div>
		);
	}
}
