import React, { Component } from 'react';
import './App.css';
import './Components/Greet';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ButtonClick from './Components/ButtonClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Form from './Components/Form';
import Styles from './Components/InlineStyles'
import TodoList from './Components/TodoList'
import ContactBook from './Components/ContactBook'
import Team from './Components/Team'
import Count from './Components/Count'
import ConditionalRendering2 from './Components/ConditionalRendering2'
import FetchingDataFromApi from './Components/FetchingDataFromApi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchingDataFromApi />
        <ConditionalRendering2 />
        <Count />
        <Team />
        <ContactBook />
        <TodoList />
        <Styles />
        <Form></Form>
        <ListRendering></ListRendering>
        <ConditionalRendering></ConditionalRendering>
        <ParentComponent></ParentComponent>
        <EventBind></EventBind>
        <ButtonClick></ButtonClick>
        <Counter></Counter>
        <Message></Message>
        <Greet name = "Krunal" age = "21">
          <p>I am Child Element</p>
        </Greet>  
        <Greet name = "Dhoni" age = "37"></Greet> 
          <button>Action</button>
        <Greet name = "Virat" age = "31"></Greet>  
        <Welcome name = "user"></Welcome>
        <Hello></Hello>
      </div>
    );
  }
}

export default App;
