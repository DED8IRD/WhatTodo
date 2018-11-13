import React from 'react';

export default class Decision extends React.Component {
	render() {
		return (
			<button 
				onClick={this.props.chooseRandom}
				disabled={(this.props.empty)}
			>
				Decide
			</button>
		);
	}
}
