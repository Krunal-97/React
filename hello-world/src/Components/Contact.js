import React from 'react'

function Contact(props) {
    console.log(props)
    
    return(
        <div>
            <h3>Name : {props.info.name}</h3>
            <h4>Address : {props.info.address}</h4>
            <h4>Number : {props.info.number}</h4>
        </div>
    )
}

export default Contact