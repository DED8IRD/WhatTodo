# Refactor React Components

We've been building our app in one big component called `App.js`. Basically, a React component uses JSX to build a custom HTML element. Components allow for more modular, reusable UI.

Read more about React components [here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Components.md).

In this section, we want to refactor our application into multiple smaller components. We'll start off by creating a component skeleton and work our way back up to a fully functioning What Todo app.

Our old `App.js` is now living in [`playground/SimpleWhatTodoApp.js`](./what-todo-app/src/playground/SimpleWhatTodoApp.js)

```jsx
export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<AddTodo />
				<Todos />
				<Decision />
			</div>		
		);
	}
}

```

Create the following components:
- Header 
- AddTodo
- Todos
- Todo
- Decision

Don't worry about getting all the functionalities working yet. Just make sure they are being properly rendered to screen (i.e. comment out the bits of data that are currently breaking your code).

