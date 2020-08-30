import React from 'react'
import {connect} from 'react-redux'

class UploadImage extends React.Component{

    state = {
        description: '',
        image: null,
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onImageChange = event => { 
        this.setState({
            image: event.target.files[0] }
        );
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('description', this.state.description);
        formData.append('user_id', this.props.user.id)
        formData.append('image', this.state.image);
        fetch('http://localhost:3000/pictures', {
            method: 'POST',
            body: (formData)
            })
        .then(response => response.json())
        .catch(error=>console.log(error));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="description" placeholder="write a description" value={this.state.description} onChange={this.handleChange}/>
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {user: state.currentUser.state}
}

export default connect(mapStateToProps)(UploadImage)