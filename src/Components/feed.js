import React from 'react'
import {connect} from 'react-redux'
import {fetchTags} from '../Actions/actions'
import {fetchPictureTags, fetchPics} from '../Actions/pictureActions'
import PhotoCard from './PhotoCard'

class Feed extends React.Component {
    photos = []

    state={
        tagIds: [],
        pictures: []
    }

    componentWillMount(){
        this.props.fetchPics()
        this.props.fetchPictureTags()
        this.props.fetchTags()
        fetch('http://localhost:3000/tag_follows')
        .then(response => response.json())
        .then(tagFollows => {
            let userFollows = tagFollows.filter(tF => tF.user_id === this.props.currentUser.id)
            let tagIds = userFollows.map(uF => uF.tag_id)
            this.setState({tagIds: tagIds})
        })
    }

    handleClick = (e) => {
        fetch('http://localhost:3000/tag_follows', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                tag_id: e.target.value
            })
        })
        .then(response => response.json())
        .then(tagFollow => this.setState(previousState => {
            return{
                tagIds: [...previousState.tagIds, tagFollow.tag_id]
            }
        }))
    }

    getRelevantPictureTags = () => {
        this.props.pictureTags.filter(pT => this.state.tagIds.map(tag => {
            if (pT.tag_id === tag) {
                let photo = this.props.pictures.find(picture => picture.id === pT.picture_id)
                this.photos.push(photo)
            }
        }))
    }

    render(){
        return (
            <div className="feeddiv">
                {this.props.tags === undefined ? null : 
                    <>
                        <h1 className="feedname">{this.props.currentUser.username}'s feed</h1>
                        <div className="feedoptions">
                            <p className="feedquestion">What would you like to see in your feed?</p>
                            <div className="feedbuttons">
                                {this.props.tags.map(tag => {
                                    return <button className="feedbutton"key={tag.id} value={tag.id} onClick={this.handleClick}>{tag.description}</button>
                                })}
                            </div>
                        </div>
                        {this.props.pictureTags !== undefined && this.getRelevantPictureTags()}
                        <div className="photoscontainer">
                            {this.photos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)}
                        </div>
                    </>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser,
        tags: state.tags.state,
        pictureTags: state.pictures.pictureTagsArray[0],
        pictures: state.pictures.picsArray[0]
    }
}

export default connect(mapStateToProps, {fetchTags, fetchPictureTags, fetchPics})(Feed)