import React , {Component} from 'react'

class ConditionalRendering2 extends Component {

    constructor() {
        super()
        this.state = {
            isLoading : true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading : false
            })
        },2000)
    }
    
    render() {
        if(this.state.isLoading === true) {
            return  <p>Loading...</p>
        }else {
            return <p>Some cool stuff about Conditional Rendering</p>
        }
    }

}

export default ConditionalRendering2