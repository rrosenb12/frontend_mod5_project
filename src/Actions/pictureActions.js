export const fetchPics = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(pictures => dispatch({type: 'FETCH_PICTURES', payload: pictures}))
    }
}

export const fetchPictureTags = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/picture_tags')
        .then(response => response.json())
        .then(pictureTags => dispatch({type: 'FETCH_PICTURETAGS', payload: pictureTags}))
    }
}