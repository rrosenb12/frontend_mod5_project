import React from 'react'
import {connect} from 'react-redux'

class UploadImage extends React.Component{

    state = {
        description: '',
        image: null,
        tag: '',
        tagToFetch: {},
        tags: []
    }

    componentWillMount(){
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(data => this.setState({tags: data}))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTagChange = e => {
        let tag = this.state.tags.find(tag => tag.description === e.target.value)
        this.setState({
            tag: e.target.value,
            tagToFetch: tag
        })
    }

    setTag = tag => {
        // console.log(tag)
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
        formData.append('user_id', this.props.currentUser.id)
        formData.append('image', this.state.image);
        fetch('http://localhost:3000/pictures', {
            method: 'POST',
            body: (formData)
            })
        .then(response => response.json())
        .then(picture => this.postPictureTag(picture))
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
        .then(console.log)
        .catch(error=>console.log(error));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleTagChange}>
                    <option name="tag" value="Select">Select a Category</option>
                    {this.state.tags.length === 0 ? null : this.state.tags.map(tag => <option value={tag.description}>{tag.description}</option>)}
                </select>
                    <input type="text" name="description" placeholder="write a description" value={this.state.description} onChange={this.handleChange}/>
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange} />
                    <input type="submit" value="Upload"/>
                </form>
            </div>
        )
    }

}

// const mapStateToProps = state => {
//     return {user: state.currentUser.state, tags: state.tags.state}
// }

export default UploadImage
// export default connect(mapStateToProps)(UploadImage)