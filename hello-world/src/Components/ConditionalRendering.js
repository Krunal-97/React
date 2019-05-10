//Condtional Rendering
//1 : if-else
//2 : Using Element Variables
//3 : Ternary Operator
//4 : Short Circuit Operator

import React , {Component} from 'react';

class ConditionalRendering extends Component{

    constructor(){
        super()

        this.state = {
            isLoggedIn : true
        }
    }

    render(){
        //1 : Using if - else
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Krunal</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }


        //2 : Using Element Variables
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Krunal</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        //3 : Ternary Operator

        // return (
        //     <div>
        //         {this.state.isLoggedIn ?
        //         (<div>Welcome Krunal</div>) :
        //         (<div>Welcome User</div>)}
        //     </div>
        // )


        //4 : Short Circuit Operator
        return this.state.isLoggedIn  && <div>Welcome Krunal</div>
    }
}

export default ConditionalRendering;