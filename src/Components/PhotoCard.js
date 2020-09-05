import React from 'react'

export default function PhotoCard(props){
    return(
        <div>
            <h1>{props.photo.description}</h1>
            <img alt="gallery" src={props.photo.image.url}/>
        </div>
    )
}