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
