export const fetchPics = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(pictures => dispatch({type: 'FETCH_PICTURES', pictures}))
    }
}