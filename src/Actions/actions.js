export const clickItem = (item) => {
    return {
        type: 'CLICK_ITEM',
        payload: item
    }
}

export const unClickItem = () => {
    return {
        type: 'UNCLICK_ITEM'
    }
}

export const fetchTags = () => {
    console.log("in fetch tags")
    return (dispatch) => {
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(tags => {
            console.log("in fetch tags fetch:", tags)
            dispatch({type: 'FETCH_TAGS', payload: tags})})
    }
}

export const fetchPics = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/pictures')
        .then(response => response.json())
        .then(pictures => dispatch({type: 'FETCH_PICTURES', pictures}))
    }
}