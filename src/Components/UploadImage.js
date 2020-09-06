import React from 'react'
import {connect} from 'react-redux'
import {fetchTags} from '../Actions/actions'
import cameraicon from '../cameraicon.png'

class UploadImage extends React.Component{
    state = {
        description: '',
        image: null,
        tagToFetch: {},
    }

    componentWillMount(){
        this.props.fetchTags()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTagChange = e => {
        let tag = this.props.tags.find(tag => tag.description === e.target.value)
        this.setState({
            tag: e.target.value,
            tagToFetch: tag
        })
    }

    setTag = tag => {
        this.setState({
            tagToFetch: tag
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
        formData.append('user_id', this.props.user.currentUser.id)
        formData.append('image', this.state.image);
        fetch('http://localhost:3000/pictures', {
            method: 'POST',
            body: (formData)
            })
        .then(response => response.json())
        .then(picture => {
            this.postPictureTag(picture)
        })
        .catch(error=>console.log(error));
    }

    postPictureTag = picture => {
        fetch('http://localhost:3000/picture_tags', {
            method: 'POST',
            headers: {
                'accepts': 'appliation/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                picture_id: picture.id,
                tag_id: this.state.tagToFetch.id
            })
        })
        .then(response => response.json())
        .catch(error=>console.log(error));
    }

    render(){
        return(
            <div className="uploadimage">
                <div className="uploadimagecamera">
                    <img className="cameraicon" src={cameraicon} alt="camera icon"/>
                </div>
                <div className="uploadimageform">
                    <form onSubmit={this.handleSubmit}>
                    <select className="uploadimageformtag" onChange={this.handleTagChange}>
                        <option name="tag" value="Select">Select a Category</option>
                        {this.props.tags === undefined ? null : this.props.tags.map(tag => <option value={tag.description}>{tag.description}</option>)}
                    </select>
                    <input className="uploadimageformdescription" type="text" name="description" placeholder="write a description" value={this.state.description} onChange={this.handleChange}/>
                    <div className="fileuploadcontainer" >
                        <label className="fileupload">
                            <input className="uploadimageformfile" type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                            Choose a File
                        </label>
                    </div>
                        <input className="uploadimageformsubmit" type="submit" value="Upload"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {user: state.currentUser, tags: state.tags.state
    }
}

export default connect(mapStateToProps, {fetchTags})(UploadImage)