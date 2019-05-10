import React from 'react'

function TodoItem(props) {
    // console.log(props)
    return(
        <div>
            <input 
                type = "checkBox" 
                onClick = {() => props.handleChange(props.todoItem.id)}
            /> 
            <span>{props.todoItem.task}</span>
        </div>
    )
}

export default TodoItem