# Conditional Rendering

In this portion, we explore conditional rendering with JSX.

There are three basic ways to conditionally render JSX:
1. functional conditional (if statement in function)
2. ternary operator (cond ? if : else)
3. logical AND operator (condition && template)

Consider the following example.
In `src/playground/ConditionalRenderingExample.js`
```jsx
const ConditionalRenderingExample = (props) => {
	let user = {
		name: 'Eunika Wu',
		age: '23',
		location: {'city':'Portland', 'state':'OR', 'country':'USA'},
	};

	// user = {} // test rendering

	const getLocation = (location) => {
		if (location) {
			return <p>Location: {Object.keys(location).map(key => location[key]).join(', ')}</p>
		}
	}

  return (
		<div>
			<h1>Hello {user.name ? user.name : 'Anon'}!</h1> #2 ternary operator
			{user.age >= 18 && <p>Age: {user.age}</p>} #3 unary operator
			{getLocation(user.location)} #1 functional conditional
		</div>
  )
}

export default ConditionalRenderingExample;
```

To run example, in `src/App.js`:
1. Import `<ConditionalRenderingExample>`
```js 
import UserProfile from '../playground/ConditionalRenderingExample'
```
2. Replace the `render` function with the following:
```js 
render() {
	return <UserProfile />
}
```

## Apply conditional rendering to WhatTodoApp

In Part 2 of WhatTodo, we will update `App.js` to:
1. Conditionally render `app.subtitle` if it exists.
2. Render 'Here are your options:' if `app.todos` is not empty, or 'No todos.' if it is empty.