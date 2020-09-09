import React from 'react'
import PhotoCard from './PhotoCard'
import {connect} from 'react-redux'
import {fetchTags} from '../Actions/tagActions'
import {fetchPics} from '../Actions/pictureActions'

class Gallery extends React.Component{
    state = {
        searchFor: '',
        pictureTags: [],
        filteredPics: []
    }

    componentWillMount(){
        this.props.fetchTags()
    }

    componentDidMount(){
        this.props.fetchPics()
        fetch('http://localhost:3000/picture_tags')
        .then(response => response.json())
        .then(pictureTags => this.setState({pictureTags: pictureTags}))
    }

    handleChange = (e) => {
        if (e.target.value === 'All') {
            this.setState({
                filteredPics: this.props.pictures
            })
        } else {
            this.setState({
                searchFor: e.target.value,
                filteredPics: []
            }, () => {
                let pT = this.state.pictureTags.filter(pT => pT.tag_id == this.state.searchFor)
                this.filterPics(pT)
            })
        }
    }

    filterPics = pT => {
        this.props.pictures.filter(photo => pT.map(pt => {
            if (photo.id === pt.picture_id){
                this.setState(previousState => {return {filteredPics: [...previousState.filteredPics, photo]}})
            }
        }))
    }

    render(){
        console.log(this.props.tags)
        return(
            <div className="gallerycontainer" >
                <div className="galleryfilter">
                    <select className="galleryfilterform" onChange={this.handleChange}>
                        <option value="Select">Select a Category</option>
                        <option value="All">All</option>
                        {this.props.tags === undefined ? null : this.props.tags.map(tag => <option value={tag.id}>{tag.description}</option>)}
                    </select>
                </div>
                <div className="galleryphotos">
                    <div className="galleryphotos2">
                    {this.state.filteredPics.length === 0 ?
                        this.props.pictures !== undefined && this.props.pictures.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                    :
                        this.state.filteredPics.map(photo => <PhotoCard key={photo.id} photo={photo}/>)
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {tags: state.tags.tagsArray[0], pictures: state.pictures.picsArray}
}

export default connect(mapStateToProps, {fetchTags, fetchPics})(Gallery)