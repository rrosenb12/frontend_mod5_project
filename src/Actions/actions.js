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
    return (dispatch) => {
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(tags => {
            dispatch({type: 'FETCH_TAGS', payload: tags})})
    }
}