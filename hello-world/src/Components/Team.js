import React from 'react'
import TeamData from './TeamData'
import Player from './Player'

function Team() {

    const BatsmanList = TeamData.map((player) => 
        <Player key = {player.id} name = {player.name} pos = {player.battingOrder}/>
    )
    // console.log(BatsmanList)
    return (
        <div>
            {BatsmanList}
        </div>
    )
}

export default Team