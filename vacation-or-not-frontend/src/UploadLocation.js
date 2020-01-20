import React, {Component} from 'react';

class UploadLocation extends Component{

    state = {
        newLocation: "",
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

    submitNewLocation = (e)=>{
        e.preventDefault();
        // console.log("Form Submitted!!");
        const formData = new FormData();
        formData.append('newLocation',this.state.newLocation);
        formData.append('file',this.state.file);
    }

    render(){
        console.log("state changed!! Rendering!!")
        return(
            <div className="new-location row">

                <div className="col-sm-8 col-sm-offset-2">
                    <form onSubmit={this.submitNewLocation}>
                        <input value={this.state.newLocation} onChange={this.changeLocation} id="new-location" type="text" placeholder="Enter location name" />
                        <input value={this.state.file} onChange={this.changeFile} id="new-image" type="file" multiple />
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadLocation;

