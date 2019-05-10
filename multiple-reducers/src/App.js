import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>A: {this.props.a}</p>
          <button onClick = {() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div>
          <p>B: {this.props.b}</p>
          <button onClick = {() => this.props.updateB(this.props.a)}>Update B</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rb.b
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({
      type: 'UPDATE_A',
      value: b
    }),

    updateB: (a) => dispatch({
      type: 'UPDATE_B',
      value: a
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
