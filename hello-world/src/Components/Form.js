import React , {Component} from 'react';

class Form extends Component {

    constructor(){
        super()

        this.state = {
            username : '',
            comments : '',
            topic : 'React'
        }
    }

    usernameHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    commentsHandler = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    topicHandler = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    submitFormHandler = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.submitFormHandler}>
                <label><h2>Form Component</h2></label>
                <label>UserName : </label>
                <input type="text" value={this.state.username} onChange={this.usernameHandler}></input><br />

                <label>Comments : </label>
                <textarea type="text" value={this.state.comments} onChange={this.commentsHandler}></textarea><br />

                <label>Topic : </label>
                <select value={this.state.topic} onChange={this.topicHandler}>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Vue</option>
                </select><br />

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;
