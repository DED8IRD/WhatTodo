# Stateless Functional Components
    
So far we have only defined our components as classes. A simpler way to define a component is to define it as a **stateless functional component**. 

#### How to use:
Functional components take a single parameter: `props`. The body of your functional component is JSX that is essentially the `render()` function of a class-based component.

Stateless functional components are **stateless** and **cannot use lifecycle methods**, so you should use class-based components if you need either.

#### Syntax:
```jsx
function Greet(props) {
    return <h1>Hello, {props.name}!</h1>
}

const Greet2 = (props) => { // equivalent as above
    return <h1>Hello, {props.name}!</h1>
} 
```

Read more about stateless functional components [here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Stateless%20Functional%20Components.md).


In this section, we want convert all the components that don't utilize state into stateless functional components in `WhatTodoApp`. 