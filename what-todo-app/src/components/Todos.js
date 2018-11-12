import React from 'react';
import Todo from './Todo'

export default class Todos extends React.Component {
	render() {
		return (
      <ul>
        <Todo />
      </ul>
    );
  }
  // // We have no access to App.state here, so references to 'this.state' will break our code. 
  // render() {
  //   return (
  //     <ul>
  //       {(this.state.todos ? 
  //         this.state.todos.map(todo => <Todo />) :
  //         "Nothing to do."
  //       )}
  //     </ul>    
  //   )
  // }
}
