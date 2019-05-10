// Ways for bindind event handlers
// 1:binding in render
// 2:arrow function in render
// 3.binding in class constructor - More Preferable
// 4.arrow function as class property

import React , {Component} from 'react';

class EventBind extends Component {

    constructor(){
        super()
        this.state = {
            message : "hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState(
    //         {
    //             message : "I am Clicked..!"
    //         }
    //     )
    // }

    clickHandler = () => {
        this.setState(
            {
                message : "I am clicked..!"
            }
        )
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click Me</button> */} 
                {/* <button onClick = {() => this.clickHandler()}>Click Me</button> */}
                <button onClick = {this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind;