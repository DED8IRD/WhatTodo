import React from 'react'
import Header from './Header'
import AddTodoContainer from '../containers/AddTodoContainer'
import VisibleTodos from '../containers/VisibleTodos'
import Decision from './Decision'
import Footer from './Footer'

export default class App extends React.Component {
  // define constructor to initialize default state object
  constructor(props) {
    super(props)
    // #1 set up default state object
    this.state = {
      title: props.title,
      subtitle: props.subtitle,
    }
  }

  render() {
    return (
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <AddTodoContainer />
        <Decision />  
        <VisibleTodos />
        <Footer />
      </div>
    )
  }
}

App.defaultProps = {
  title: 'What Todo?',
  subtitle: 'Figure out what to do next',
}