import React from 'react'
import List from '../playground/RenderArraysAsList'

export default class App extends React.Component {
  // render() {
  //   let app = {
  //     title: 'WhatTodo',
  //     subtitle: 'Decide what to do next.',
  //     todos: ['wash cat', 'burn mail', 'terrorize neighbor']    
  //   }

  //   return (
  //     <div>
  //       <h1>{app.title}</h1>
  //       {app.subtitle && <h3>{app.subtitle}</h3>}
  //       <ul>
  //         {(app.todos ? 
  //           app.todos :
  //           "Nothing to do."
  //         )}
  //       </ul>
  //     </div>
  //   )
  // }

  render () {
    return <List />
  }
}

