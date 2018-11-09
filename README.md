# Forms and Inputs

In this portion, we explore event handling for input and forms.

In [`./src/components/App.js`](`./src/components/App.js`):

We set up the addTodo form in JSX:
```jsx
<form onSubmit={onFormSubmit}>
	<input type='text' name='todo'/>
	<button>+</button>
</form>
```

Note that `onSubmit` takes in the method `onFormSubmit`:
```jsx
const onFormSubmit = (evt) => {
	evt.preventDefault();
	const todo = evt.target.elements.todo.value;
	if (todo) {
		app.todos.push(todo);
		evt.target.elements.todo.value = '';
	}
	console.log(app.todos)
}
```

This is where we actually add the todo to our `app.todos`.
If you enter a new todo, you should see it added to `app.todos` from the console.log statement. However, this change is not reflected in our rendered list. To make our changes appear onscreen, we need to enable *data binding*. In the next section, we will learn how through using *component state*.