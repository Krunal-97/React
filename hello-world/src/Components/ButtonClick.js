import React from 'react';

function ButtonClick() {

    function clickHandler() {
        console.log('Button Clicked');
    }
    return (
        <button onClick = {clickHandler}>Click</button>
    )
}

export default ButtonClick;