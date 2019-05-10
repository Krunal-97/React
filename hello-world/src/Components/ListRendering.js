import React from 'react';
import ListRendering2 from './Listrendering2';

let ListRendering = () => {

    const batsmenList = 
    [
        {
            id : 1,
            name : 'Dhawan',
            position : 'Opener'
        },
        {
            id : 2,
            name : 'Rohit',
            position : 'Opener'
        }
    ]

    let batsman = batsmenList.map(batsmenList => (
            <ListRendering2  key={batsmenList.id}  batsmenList={batsmenList}></ListRendering2>
        ))

    return <div>{batsman}</div>
}

export default ListRendering;