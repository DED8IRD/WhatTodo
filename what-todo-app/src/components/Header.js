import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<h1>This is where our header will go.</h1>
		);
	}
	
	// // We have no access to App.state here, so references to 'this.state' will break our code. 
	// render() {
	// 	return (
	// 		<div>
 //        <h1>{this.state.title}</h1>
 //        {this.state.subtitle && <h3>{this.state.subtitle}</h3>}				
	// 		</div>
	// 	)
	// }
			
}
