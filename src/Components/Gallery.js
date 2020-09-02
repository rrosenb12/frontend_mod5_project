import React from 'react'
import PhotoCard from './PhotoCard'
import {connect} from 'react-redux'
import {fetchTags} from '../actions'

class Gallery extends React.Component{

    state = {
        photos: [],
        searchFor: '',
        pictureIds: [],
        filteredPics: [],
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

    // componentWillUpdate(){
    //     fetch('http://localhost:3000/picture_tags')
    //     .then(response => response.json())
    //     .then(pictureTags => this.setState({pictureTags: pictureTags}, () => console.log(this.state.pictureTags)))
    // }

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
        // , () => {
        //     let tag = this.props.tags.find(tag => tag.description === this.state.searchFor)
        //     let pictureIds = tag.pictures.map(photo => (photo.id))
        //     this.setIds(pictureIds)
        // })
    // }

    // setIds = pictureIds => {
    //     this.setState({
    //         pictureIds: pictureIds
    //     })
    // }
    
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         filteredPics: []
    //     })
    //     this.state.pictureIds.map(id => {
    //         fetch(`http://localhost:3000/pictures/${id}`)
    //         .then(response => response.json())
    //         .then(pic => this.setPic(pic))
    //     })
    // }

    // setPic = pic => {
    //     this.setState(previousState =>{
    //         return {
    //         filteredPics: [pic, ...previousState.filteredPics]
    //     }})
    // }

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
    // render(){
    // return(
    //     <div>
    //         <h1>hello</h1>
    //         <form onSubmit={this.handleSubmit}>
    //             <select onChange={this.handleChange}>
    //                 <option value="Select">Select a Category</option>
    //                 {this.props.tags === undefined ? null : this.props.tags.map(tag => <option value={tag.description}>{tag.description}</option>)}
    //             </select>
    //             <input type="submit"></input>
    //         </form>
    //         <div>
    //             {this.state.filteredPics.length === 0 ? this.state.photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>) : this.state.filteredPics.map(photo => <PhotoCard key={photo.id} photo={photo}/>) }
    //         </div>
    //     </div>
    // )}
    // }

// const mapStateToProps = state => {
//     return {tags: state.tags.state}
// }

export default Gallery
// export default connect(mapStateToProps, {fetchTags})(Gallery)