import React from 'react'

let users = []

const fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(usersArray => users = usersArray)
}

const setUser = photo => {
    let author = users.find(user => user.id === photo.user_id)
    return author.username
}

export default function PhotoCard(props){
    return(
        <div className="photocard">
            {props.from ? <h1 className="photocardtitle"> {props.photo.description}</h1> :
            <h1 className="photocardtitle"> {props.photo.description}, by {setUser(props.photo)}</h1>}
            <img className="photocardimg" alt="gallery" src={props.photo.image.url}/>
        </div>
    )
}

fetchUsers()