# Create-React-App 
This is our first step in building our What Todo app. We're going to create a project using [Create React App](https://github.com/facebook/create-react-app)(CRA).

Create-React-App lets you create React apps with no build configuration. You don’t need to install or configure tools like Webpack or Babel (CRA handles that for you with hidden configurations so that you can just get to writing code). CRA sets up a boilerplate React app, so you can start developing immediately.

## Create Project
```
> yarn create react-app what-todo-app
```

This will create a directory called `what-todo-app` inside the current directory. Inside `what-todo-app/`, CRA will generate the initial project structure and install the transitive dependencies:

```
what-todo-app/
├── README.md
├── node_modules/
├── package.json/
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

## CRA Commands
Make sure to enter your React project's directory to run the commands below. 
```
> cd what-todo-app
``` 

### `start` 
CRA has a built-in development server, which features live reloading, so any changes you make will automatically reload onto the page. Build errors and lint warnings will appear in the console.

Run the `start` command:
```
> yarn start 
```
Your React app should be live at [ http://localhost:3000]. 

#### `test` 
To run the test watcher in an interactive mode:
```
> yarn test 
```

#### `build` 
To build the app for production mode in the `build/` directory:
```
> yarn build
```

This optimizes (minimizes and bundles your static assets) your build for performance.

Your app is ready to deploy at this point. 

## Refactor 
We're going to refactor a bit of the boilerplate code. 

1. Enter your project directory `cd what-todo-app`
2. Delete everything in `src/` except `serviceWorker.js`.
3. Create a new directory in `src/` named `components`. This is where all your React components will live.
4. Create a new directory in `src/` named `playground`. This is where we will play around with React concepts before applying them to your main Todos app.
5. Create a new file in `src/` named `index.js`. This is your *JavaScript entry point*. Add the following lines to `index.js`:
```jsx 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```
6. Create a new file in `src/components/` called `App.js`. This is your *main app component*. Add the following lines to it:
```jsx 
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
```

Your project structure should now look like this:
```
what-todo-app/
├── README.md
├── node_modules/
├── package.json/
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src/
	├── playground/
	├── src/
	│   └── App.js
    ├── index.js
    └── serviceWorker.js
```

Run `yarn start` and you should now see `Hello World!` rendered onscreen.
