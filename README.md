# Styling React Elements

Because **Babel** transpiles JSX elements into plain HTML elements, you can style them using CSS as-per-usual.

## Adding CSS classes and ids to JSX elements
### class
Because `class` is a keyword in JavaScript, React uses the prop `className` to add CSS classes to a JSX element. Simply pass a string as the `className` prop.

### id 
`id` is not a reserved keyword, so add them to JSX elements normally.

```jsx 
render() {
	return <h1 className="greeting" id="hello-world">Hello World!</h1>
}
``` 

Babel transpiles the code above into the following HTML:
```html 
<h1 class="greeting" id="hello-world">Hello World!</h1>
``` 

## Style with CSS
Style with CSS as usual (reference classes with `.` and ids with `#`.

## Inline Styling
The `style` attribute accepts a JavaScript object with *camelCased* properties rather than *kebab-cased* CSS strings.

```jsx 
const greetStyle = {
	color: 'green',
	fontSize: '72',
	backgroundImg: `url(${imgUrl})`
}

const GreetComponent = (props) => {
	return <div style={greetStyle}>Hello World!</div>
}

```

As of React 16, any standard or custom DOM attributes are fully supported. You may also use custom attributes as long as they’re fully lowercase.

___
Note: Many examples use `style` for convenience, but using the `style` attribute as the primary means of styling elements is **generally not recommended**. 

In most cases, `className` should be used to reference classes defined in an external CSS stylesheet. `style` is most often used in React applications to add dynamically-computed styles at render time. 

___
In this section, style WhatTodo App.