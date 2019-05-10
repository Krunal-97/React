import React , {Component} from 'react'

class Count extends Component {

    constructor() {
        super()

        this.state = {
            count : 0
        }

        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
    }

    handleIncrease() {
        this.setState (
            {
                count : this.state.count + 1 
            }
        )
    }

    handleDecrease() {
        this.setState ((prevState) => {
            return {
                count : prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick = {this.handleIncrease}>Increase</button>
                <button onClick = {this.handleDecrease}>Decrease</button>
            </div>
        )
    }

}

export default Count