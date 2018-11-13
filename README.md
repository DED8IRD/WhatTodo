# Data Persistence with Life Cycle Methods and Local Storage

So far, we have set up a functioning What Todo app, but our todos are lost when we refresh the page. To fix this, we'll set up data persistence using `localStorage` and **component lifecycle methods**.

To do so, you'll need to:
1. Load data from `localStorage` when the component mounts
```js
this.setState({val: JSON.parse(localStorage.getItem('key'))});
```
2. Save data to `localStorage` when the component updates
```js
let val = JSON.stringify(this.state.val) 
localStorage.setItem('key', val);
```

In [./src/playground/CounterWithDataPersistence.js](.what-todo-app/src/playground/CounterWithDataPersistence.js):
```jsx
// #1
componentDidMount() {
    try {
        const count = parseInt(JSON.parse(localStorage.getItem('count')));
        if (!isNan(count)) {
            this.setState(() => ({count: count}));
        }
    } catch(err) {

    } 
    console.log('loading data')
}
// #2
componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
        console.log('saving data')
    }
}
```

In this section, we want to use lifecycle methods to save and load data from local storage in our WhatTodo `App`. 