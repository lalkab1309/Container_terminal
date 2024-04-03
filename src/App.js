import React, { Component } from 'react'
import Header from './Components/Header'
import Main_1 from './Components/Main_1'
import Main_2 from './Components/Main_2'
import Main2_1 from './Components/Main2_1'

export class App extends Component {
  render() {
    return (
        <div className='wrapper'>
            <Header />
            <Main_1 />
            <Main2_1 />
            <Main_2 />
        </div>
    )
  }
}

export default App