import React from 'react'

export default function PhotoCard(props){
    return(
        <div className="photocard">
            <h1 className="photocardtitle"> {props.photo.description}</h1>
            <img className="photocardimg" alt="gallery" src={props.photo.image.url}/>
        </div>
    )
}