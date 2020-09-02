import React from 'react'
import PhotoCard from './PhotoCard'

class Gallery extends React.Component{

    state = {
        photos: [],
        searchFor: '',
        tags: [],
        pictureTags: []
    }

    componentWillMount(){
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(data => this.setState({tags: data}))
    }

    componentDidMount(){
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(photoArray => {
            this.setState({photos: photoArray})
        })

        fetch('http://localhost:3000/picture_tags')
        .then(response => response.json())
        .then(pictureTags => this.setState({pictureTags: pictureTags}, () => console.log(this.state.pictureTags)))
    }

    handleChange = (e) => {
        this.setState({
            searchFor: e.target.value
        }, () => {
            console.log(this.state.pictureTags)
            let pT = this.state.pictureTags.find(pT => pT.tag_id == this.state.searchFor)
            this.filterPics(pT)
        })
    }

    filterPics = pT => {
        console.log(pT)
        console.log(this.state.photos)
        let newPhotosArray = this.state.photos.filter(photo => photo.id !== pT.picture_id)
        this.setState({photos: newPhotosArray})
    }

    render(){
        return(
            <div>
            <h1>hello</h1>
                <select onChange={this.handleChange}>
                    <option value="Select">Select a Category</option>
                    {this.state.tags === undefined ? null : this.state.tags.map(tag => <option value={tag.id}>{tag.description}</option>)}
                </select>
                <div>
                    {this.state.photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
                </div>
            </div>
        )}
    }

export default Gallery