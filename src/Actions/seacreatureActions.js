export const fetchSeacreatures = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/sea_creatures')
        .then(response => response.json())
        .then(seacreatures => dispatch({ type: 'FETCH_SEACREATURES', payload: seacreatures }));
    };
}

export const fetchSeacreaturesForUser = (user, dispatch) => {
    fetch('http://localhost:3000/sea_creatures')
    .then(response => response.json())
    .then(data => {
        fetchUserSeacreatures(user, data, dispatch)
    })
}

export const fetchUserSeacreatures = (user, data, dispatch) => {
    fetch('http://localhost:3000/user_seacreatures')
    .then(response => response.json())
    .then(userSeacreatures => {
        let currentUserSeacreatures = userSeacreatures.filter(uS => uS.user_id === user.id)
        matchSeacreatures(currentUserSeacreatures, data, dispatch)
    })
}

export const matchSeacreatures = (uS, data, dispatch) => {
    let seaCreatureIds = uS.map(seaCreature => seaCreature.sea_creature_id)
    data.filter(seaCreature => seaCreatureIds.map(id => {      
        if (seaCreature.id === id) {
            toTheReducer(seaCreature, dispatch)
        }
    }))
}

export const toTheReducer = (seaCreature, dispatch) => {
    dispatch({type: 'ADD_SEACREATURE', payload: seaCreature})
}

export const createUserSeacreatures = (seaCreature, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_seacreatures`, {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                sea_creature_id: seaCreature.id
            })
        })
        .then(response => response.json())
        .then(userSeacreaturesState(seaCreature, dispatch))
    }
}

export const userSeacreaturesState = (seaCreature, dispatch) => {
    dispatch({type: 'ADD_SEACREATURE', payload: seaCreature})
}

export const deleteUserSeacreature = (seacreature, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_seacreatures`)
        .then(response => response.json())
        .then(userSeacreatures => findUSToDelete(userSeacreatures, seacreature, currentUser, dispatch))
    }
}

export const findUSToDelete = (userSeacreatures, seacreature, currentUser, dispatch) => {
    userSeacreatures.find(uS => {
        if (uS.user_id === currentUser.id && uS.sea_creature_id === seacreature.id) {
            fetchToDelete(uS.id, seacreature, dispatch)
        }
    })
}

export const fetchToDelete = (id, seacreature, dispatch) => {
    fetch(`http://localhost:3000/user_seacreatures/${id}`, {
        method: 'DELETE'
    })
    .then(dispatch({type: 'DELETE_SEACREATURE', payload: seacreature}))
}