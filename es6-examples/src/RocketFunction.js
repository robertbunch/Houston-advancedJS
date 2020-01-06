import React, { Component } from 'react';

class RocketFunction extends Component{
    constructor(){
        super();
        this.state = {
            text: ""
        }
        console.log(this);
        // this.buttonClick = this.buttonClick.bind(this);
    }

    // state = {
    //     text: "",
    // }

    buttonClick = ()=>{
        console.log(this);
        console.log("Button was clicked!");
        this.setState({
            text: "Button was clicked!!",
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.buttonClick} >Click Me!!</button>
                <div>{this.state.text}</div>
            </div>
        )
    }
}

export default RocketFunction;