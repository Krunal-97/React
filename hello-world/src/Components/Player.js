import React from 'react'

function Player(props) {
    // console.log(props)
    return(
        <div>
            Name : {props.name} <br />
            Batting Order : {props.pos}
        </div>
    )
}

export default Player