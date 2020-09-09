import React from 'react'

export default class FeedContent extends React.Component {

    state = {
        allPictureTags: [],
        filteredPTs: [],
        urls: [],
        coolPhotos: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/picture_tags')
        .then(response => response.json())
        .then(data => {
            this.props.tagFollows.filter(tf => data.map(data => {
                if (tf.tag_id === data.tag_id){
                    this.fetchPics(data.picture_id)
                }
            }))
        })    
    }

    fetchPics = (id) => {
        fetch(`http://localhost:3000/pictures/${id}`)
        .then(response => response.json())
        .then(data => {
            const imgEl = <img src={data.image.url}/>
            this.setState(previousState => {return {coolPhotos: [...previousState.coolPhotos, imgEl]}})
        })
    }

    render(){
        return(
            <>
            {this.state.coolPhotos.map(photo => photo)}
            <h1>hi</h1>
            </>
        )
    }
}