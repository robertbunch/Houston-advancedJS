import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{

  state = { 
    locations: "",
  }

  async componentDidMount(){
    const url = `http://localhost:3000/get-pics`
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({
      locations: response.data,
    })
  }

  render(){
    if(!this.state.locations){
      return(<h1>Loading</h1>)
    }

    // const pictures = this.state.locations.map((location,i)=>
    //   (<div></div>)
    // )

    const randomNumber = Math.floor(Math.random() * this.state.locations.length)
    const randomLocation = this.state.locations[randomNumber];

    return (
      <div className="App">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-sm-offset-3 text-center">
                    <h2 class="text-info">message here</h2>
                    <h3>{randomLocation.location_name}</h3>
                    <img src={`http://localhost:3000${randomLocation.location_url}`} />
                   
                        <button onClick={this.voteUp} class="btn btn-success">Vacation</button>

                        <button onClick={this.voteDown} class="btn btn-danger">Not...</button>

                </div>
            </div>
        </div>    

      </div>
    );
  }
}

export default App;
