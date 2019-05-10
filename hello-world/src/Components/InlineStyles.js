import React from 'react'
 
function Styles() {

    let date = new Date()
    let time = date.getHours()
    let message
    let styles = {
        fontSize : "24px"
    }

    if(time < 12) {
        message = "Good Morning"
        styles.color = "green"
    } else if(time > 12 && time <= 19) {
        message = "Good Evening"
        styles.color = "orange"
    } else {
        message = "Good Night"
        styles.color = "purple"
    }
    return (
        <h1 style = {styles}>{message}</h1>
    )
}

export default Styles