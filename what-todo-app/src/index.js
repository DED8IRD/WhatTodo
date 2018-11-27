import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './reducers/rootReducer'
import App from './components/App';

// create redux store
const store = createStore(todoApp)
// pass store into root app via <Provider>
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
