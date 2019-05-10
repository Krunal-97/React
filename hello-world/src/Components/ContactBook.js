import React from 'react'
import Contact from './Contact'

function ContactBook() {
   
    return(
        <div>
            <Contact info = {{name : "Dhoni", address : "Chennai", number : "123456789"}}/>
            <Contact info = {{name : "Sachin", address : "Mumbai", number : "123456789"}}/>
        </div>
    )
}

export default ContactBook