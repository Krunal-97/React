import React, { Component } from 'react';
import {connect} from 'react-redux'

class App extends Component {

  // state = {
  //   age: 21
  // }

  // onIncrease = () => {
  //   this.setState((prevState) => {
  //     return {
  //       age: prevState.age + 1
  //     }
  //   })
  // }

  // onDecrease = () => {
  //   this.setState((prevState) => {
  //     return {
  //       age: prevState.age - 1
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Age: {this.props.age}</h1>
        <button onClick = {this.props.onIncrease}>Increase</button>
        <button onClick = {this.props.onDecrease}>Decrease</button>
        {/* {console.log(this.props.history)} */}
        <hr />
        <h2>History</h2>
        <ul>
          {
            this.props.history.map(element => (
              <li key = {element.id} onClick = {() => this.props.onDeleteItem(element.id)}>
                {element.age}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onIncrease: () => dispatch({
      type: 'AGE_UP',
      value: 1
    }),

    onDecrease: () => dispatch({
      type: 'AGE_DOWN',
      value: 1
    }),

    onDeleteItem: (id) => dispatch({
      type: 'DELETE_ITEM',
      key: id
    })
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
