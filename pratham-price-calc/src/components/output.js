import React from 'react'

const Output = (props) => {
    return (
        <div>
            {props.noteBooks && props.pages && <p>Total Number of Notebooks : {props.noteBooks}</p>}
            {props.noteBooks && props.pages && <p>Number of Pages Per Notebook : {props.pages}</p>}
            {props.noteBooks && props.pages && <p className = "price">Final Price of One Notebook : {props.finalPrice}</p>}
            {props.error && <p className = "error">Error : {props.error}</p>}
        </div>
    )
}

export default Output