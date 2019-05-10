import React from 'react'
import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'

const App = () => {
    return (
      <div className = 'app'>
        <Titles />
        <Form />
      </div>
    )
}

export default App