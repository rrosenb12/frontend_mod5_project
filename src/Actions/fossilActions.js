export const fetchFossils = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/fossils')
        .then(response => response.json())
        .then(fossils => dispatch({ type: 'FETCH_FOSSILS', payload: fossils }));
    };
}

export const fetchFossilsForUser = (user, dispatch) => {
    fetch('http://localhost:3000/fossils')
    .then(response => response.json())
    .then(data => {
        fetchUserFossils(user, data, dispatch)
    })
}

export const fetchUserFossils = (user, data, dispatch) => {
    fetch('http://localhost:3000/user_fossils')
    .then(response => response.json())
    .then(userFossils => {
        let currentUserFossils = userFossils.filter(uF => uF.user_id === user.id)
        matchFossils(currentUserFossils, data, dispatch)
    })
}

export const matchFossils = (uF, data, dispatch) => {
    let fossilsIds = uF.map(fossil => fossil.fossil_id)
    data.filter(fossil => fossilsIds.map(id => {      
        if (fossil.id === id) {
            toTheReducer(fossil, dispatch)
        }
    }))
}

export const toTheReducer = (fossil, dispatch) => {
    dispatch({type: 'ADD_FOSSIL', payload: fossil})
}

export const createUserFossils = (fossil, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_fossils`, {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                fossil_id: fossil.id
            })
        })
        .then(response => response.json())
        .then(userFossilsState(fossil, dispatch))
    }
}

export const userFossilsState = (fossil, dispatch) => {
    dispatch({type: 'ADD_FOSSIL', payload: fossil})
}

export const deleteUserFossil = (fossil, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_fossils`)
        .then(response => response.json())
        .then(userFossils => findUFToDelete(userFossils, fossil, currentUser, dispatch))
    }
}

export const findUFToDelete = (userFossils, fossil, currentUser, dispatch) => {
    userFossils.find(uF => {
        if (uF.user_id === currentUser.id && uF.fossil_id === fossil.id) {
            fetchToDelete(uF.id, fossil, dispatch)
        }
    })
}

export const fetchToDelete = (id, fossil, dispatch) => {
    fetch(`http://localhost:3000/user_fossils/${id}`, {
        method: 'DELETE'
    })
    dispatch({type: 'DELETE_FOSSIL', payload: fossil})
}