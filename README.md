# Arrays in JSX

You might have noticed that embedding arrays like `{arr}` doesn't quite give you the out put you want, and you aren't able to iterate over an array directly in JSX.

The solution: use `map()` to functionally transform an array into JSX elements.

In [`./src/playground/RenderArraysAsList.js`](`./src/playground/RenderArraysAsList.js`):

```jsx
// Render lists programmatically using maps in your template.

const arr = ['this', 'is', 'a', 'list', null, '', false];
const template = (
	<div>
		<ol>
			{arr.map((item) => <li>{item}</li>)}
		</ol>
	</div>
);

ReactDOM.render(template, document.getElementById('app');
```

#### Keys
Note: When you run the code above, you'll get this warning: 
`Warning: Each child in an array or iterator should have a unique "key" prop.`

The **key** should be a unique identifier for your iterable item. Keys allow React to identify which items have been added/removed/updated. Typically if you're working with a database, this will be the item's *primary key*. Otherwise, you'll need to assign an unique identifier.

A good rule of thumb is that elements inside the `map()` call need keys.

To fix this above code, we'll assign a `key` prop inside your `map`:
```jsx
{arr.map((item, idx) => <li key={idx}>{item}</li>)}
```
Here, we're using the item's index. Note: if you are going to modify the order of this array at all, you should choose a different key.

Read more about why keys are necessary [here](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

In this section, we want to modify `app.js` such that WTDApp renders each todo as a `<li>` element.
