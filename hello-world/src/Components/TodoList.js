import React , {Component} from 'react'
import TodoItem from './TodoItem'
import TodosData from './TodosData'

class TodoList extends Component {

    constructor() {
        super()

        this.state = {
            todos : TodosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if(todo.id === id) {
                    todo.isChecked = !todo.isChecked
                }
                return todo
            })
            return updatedTodos
        })
        
    }

    render() {
        
        const todoItems = this.state.todos.map((item) => 
            <TodoItem key = {item.id} todoItem = {item} handleChange = {this.handleChange}/>
        )

        return (
            <div>
                {todoItems}
            </div>
        )
    }
}

export default TodoList