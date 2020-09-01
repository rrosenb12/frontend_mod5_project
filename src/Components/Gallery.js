import React from 'react'
import PhotoCard from './PhotoCard'
import {connect} from 'react-redux'
import {fetchTags} from '../actions'

class Gallery extends React.Component{

    state = {
        array: [],
        searchFor: ''
    }

    componentDidMount(){
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(photoArray => this.setState({array: photoArray}))
        return this.props.tags === undefined ? this.props.fetchTags() : null
    }

    handleChange = (e) => {
        this.setState({
            searchFor: e.target.value
        }
        // , () => {
        //    let tagArray = this.props.tags.find(tag => tag.description === this.state.searchFor)
        //    console.log(tagArray)
        //    this.state.array.map(photo => this.tagArray.includes())
        // }
        )
    }

    render(){
    return(
        <div>
        <h1>hello</h1>
            <select onChange={this.handleChange}>
                <option value="Select">Select a Category</option>
                {this.props.tags === undefined ? null : this.props.tags.map(tag => <option value={tag.description}>{tag.description}</option>)}
            </select>
            <div>
                {this.state.array.length === 0 ? null : this.state.array.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    )}
}

const mapStateToProps = state => {
    return {tags: state.tags.state}
}

export default connect(mapStateToProps, {fetchTags})(Gallery)