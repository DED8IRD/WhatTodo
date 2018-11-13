# Default Props
    
You can set up a component's default state object by using default props.

To do so:
1. Define your default component state object using prop values
`this.state = {attr: props.attr, ...}`
2. Define your default props after your component definition
`ComponentName.defaultProps = {attr: defaultVal}`

Consider the following:
```jsx
class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.greet = this.greet.bind(this);
        this.state = {
            greeting: props.greeting,
            name: props.name,
        };
    }
    greet() {
        return this.state.greeting +' '+ this.state.name;
    }
}

Greet.defaultProps = {
    greeting: 'Hello',
    name: 'World'
}

ReactDOM.render(<Greet name='Bronson' />, document.getElementById('app'))
```
The DOM outputs `Hello Bronson!` in this example because we specify a value for the `name` prop. If we left out the the `name` prop, the greet message would default to `Hello World!`.

In this section, we want to specify default props for `App.js`. 