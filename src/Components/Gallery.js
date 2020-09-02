import React from 'react'
import PhotoCard from './PhotoCard'
import {connect} from 'react-redux'
import {fetchTags} from '../Actions/actions'

class Gallery extends React.Component{

    state = {
        array: [],
        searchFor: '',
        pictureIds: [],
        filteredPics: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(photoArray => {
            this.setState({array: photoArray})
        })
        return this.props.tags === undefined ? this.props.fetchTags() : null
    }

    handleChange = (e) => {
        this.setState({
            searchFor: e.target.value
        }, () => {
            let tag = this.props.tags.find(tag => tag.description === this.state.searchFor)
            let pictureIds = tag.pictures.map(photo => (photo.id))
            this.setIds(pictureIds)
        })
    }

    setIds = pictureIds => {
        this.setState({
            pictureIds: pictureIds
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            filteredPics: []
        })
        this.state.pictureIds.map(id => {
            fetch(`http://localhost:3000/pictures/${id}`)
            .then(response => response.json())
            .then(pic => this.setPic(pic))
        })
    }

    setPic = pic => {
        this.setState(previousState =>{
            return {
            filteredPics: [pic, ...previousState.filteredPics]
        }})
    }

    render(){
    return(
        <div>
            <h1>hello</h1>
            <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleChange}>
                    <option value="Select">Select a Category</option>
                    {/* {this.props.tags === undefined ? null : this.props.tags.map(tag => <option value={tag.description}>{tag.description}</option>)} */}
                </select>
                <input type="submit"></input>
            </form>
            <div>
                {this.state.filteredPics.length === 0 ? this.state.array.map(photo => <PhotoCard key={photo.id} photo={photo}/>) : this.state.filteredPics.map(photo => <PhotoCard key={photo.id} photo={photo}/>) }
            </div>
        </div>
    )}
}

const mapStateToProps = state => {
    return {tags: state.tags.state}
}

export default connect(mapStateToProps, {fetchTags})(Gallery)