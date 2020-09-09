export const fetchTags = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tags')
        .then(response => response.json())
        .then(tags => {
            dispatch({type: 'FETCH_TAGS', payload: tags})
        })
    }
}

export const fetchTagFollows = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/tag_follows')
        .then(response => response.json())
        .then(tagFollows => {
            dispatch({type: 'FETCH_TAGFOLLOWS', payload: tagFollows})
    })
}}

export const createTagFollow = (currentUser, tagFollowId) => {
    return (dispatch) => {
        fetch('http://localhost:3000/tag_follows', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                tag_id: tagFollowId
            })
        })
        .then(response => response.json())
        .then(tagFollow => {
            dispatch({type: 'CREATE_TAGFOLLOW', payload: tagFollow})
        })
    }
}