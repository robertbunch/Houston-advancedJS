import React,{Component} from 'react';

// function Test(props){
//     return(
//         <h1>Test</h1>
//     )
// }

class Test extends Component{


    render(){
        console.log(this.props);
        return(
            <div>
                <h1 onClick={()=>{this.props.clickHandle()}}>{this.props.title}</h1>
                <h2>{this.props.anotherProp}</h2>
            </div>
        )
    }
}

export default Test;