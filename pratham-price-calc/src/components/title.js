import React , { Component } from 'react';
import logo from '../logo.jpg'

class Title extends Component {

    render() {
        return (
            <div className = "title">
            <span className = "main">
                <img src = {logo} alt = "Pratham" className = "logo" />
                <span className = "topHead"> Pratham Notebook </span>
            </span>
                <h5 className = "secondaryHead">Price Calculator</h5>
            </div>
        )
    }

}

export default Title;