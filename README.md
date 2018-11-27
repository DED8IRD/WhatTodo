# Redux

Redux is a state management framework. So far we have implemented component state through this format:
1. State is 'lifted up' to the closest shared ancestor: `App.js` - our WhatTodo app component
2. We pass state modifiers down to child components as `props`

For larger and more complex application structures, this can easily get messy. What if we need to update state across many components that aren't related? What if only a child far down in the hierarchy needs a state modifier? This would entail us passing state down via props through many components that don't modify the state at all and generating more complex hierarchies where there need not be.

## Solution: Use a state management framework like Redux or Flux
With Redux, we will maintain a single application state called a `store`. All components can access the application-wide state by sending an **action** to the `store`, which computes a **new state**.

## Tutorial
Refer to the tutorial [here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Redux.md#usage). 

Make sure to install Redux:
```
> yarn add redux react-redux 
// OR 
> npm install redux react-redux
```
___
In this section, we will implement Redux with WhatTodo app.
Follow the tutorial above.