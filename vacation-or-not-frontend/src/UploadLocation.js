import React, {Component} from 'react';
import Test from './Test';
import axios from 'axios';

class UploadLocation extends Component{

    state = {
        newLocation: "",
        file: "",
    }

    changeLocation = (e)=>{
        this.setState({
            newLocation: e.target.value
        })
    }


    changeFile = (e)=>{
        const file = e.target.files[0];
        this.setState({
            file: file,
        })
    }

    submitNewLocation = async(e)=>{
        e.preventDefault();
        // console.log("Form Submitted!!");
        const formData = new FormData();
        formData.append('newLocation',this.state.newLocation);
        formData.append('file',this.state.file);
        const config = {headers: {
            'content-type': 'multipart/form-data',
        }}
        const url = `http://localhost:3000/submit-new-location`
        const response = await axios.post(url,formData,config);
        console.log(response.data);
    }

    clickHandle = ()=>{
        console.log("User clicked on the h1!");
    }

    render(){
        console.log("state changed!! Rendering!!")
        return(
            <div className="new-location row">
                <div className="col-sm-8 col-sm-offset-2">
                    <form onSubmit={this.submitNewLocation}>
                        <input value={this.state.newLocation} onChange={this.changeLocation} id="new-location" type="text" placeholder="Enter location name" />
                        <input onChange={this.changeFile} id="new-image" type="file" multiple />
                        <button type="submit" className="btn btn-primary">Submit!</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadLocation;




{/* <div className="col-sm-12">
<Test 
    clickHandle={this.clickHandle} 
    title="Upload your docs here!"
    aBool={true} 
    aNum={3}
    anArray={[1,2,3,4,5]}
    anObj={{msg:"test"}}
    undef={undefined}
    nullAsAVal={null}
/>
</div> */}