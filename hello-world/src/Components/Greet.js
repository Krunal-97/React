import React from 'react';

// function Greet() {
//     return <h1>Hello Krunal</h1>
// }

const Greet = (props) => 
    {
        return (
            <div>
                <h2>Hello {props.name} and he is {props.age} years old.</h2>
                {props.children}
            </div>
        )
    }
export default Greet;
