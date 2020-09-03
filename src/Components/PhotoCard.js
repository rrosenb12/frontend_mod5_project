import React from 'react'
import {connect} from 'react-redux'

function PhotoCard(props){
    return(
        <div>
            {/* {console.log(props.tags)} */}
            <h1>hi</h1>
            <img alt="gallery" src={props.photo.image.url}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {tags: state.tags.state}
}

export default connect(mapStateToProps)(PhotoCard)