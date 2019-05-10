import React from 'react';

let ListRendering2 = ({batsmenList}) => {
    return (
        <div>
            <h2>
              My name is {batsmenList.name} and I am {batsmenList.position}
            </h2>
        </div>
    )
}

export default ListRendering2;