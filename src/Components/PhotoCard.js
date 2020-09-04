import React from 'react'
import {connect} from 'react-redux'

function PhotoCard(props){
    return(
        <div>
            <h1>{props.photo.description}</h1>
            <img alt="gallery" src={props.photo.image.url}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {tags: state.tags.state}
}

export default connect(mapStateToProps)(PhotoCard)