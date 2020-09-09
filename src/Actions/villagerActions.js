export const fetchVillagers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/villagers')
        .then(response => response.json())
        .then(villagers => {
            dispatch({ type: 'FETCH_VILLAGERS', payload: villagers })});
      };
}

export const fetchVillagersForUser = (user, dispatch) => {
    fetch('http://localhost:3000/villagers')
    .then(response => response.json())
    .then(data => {
        fetchUserVillagers(user, data, dispatch)
    })
}

export const fetchUserVillagers = (user, data, dispatch) => {
    fetch('http://localhost:3000/user_villagers')
    .then(response => response.json())
    .then(userVillagers => {
        let currentUserVillagers = userVillagers.filter(uV => uV.user_id === user.id)
        matchVillagers(currentUserVillagers, data, dispatch)
    })
}

export const matchVillagers = (uV, data, dispatch) => {
    let villagerIds = uV.map(villager => villager.villager_id)
    data.filter(villager => villagerIds.map(id => {      
        if (villager.id === id) {
            toTheReducer(villager, dispatch)
        }
    }))
}

export const toTheReducer = (villager, dispatch) => {
    dispatch({type: 'ADD_VILLAGER', payload: villager})
}

export const createUserVillagers = (villager, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_villagers`, {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                villager_id: villager.id
            })
        })
        .then(response => response.json())
        .then(userVillagersState(villager, dispatch))
    }
}

export const userVillagersState = (villager, dispatch) => {
    dispatch({type: 'ADD_VILLAGER', payload: villager})
}

export const deleteUserVillager = (villager, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_villagers`)
        .then(response => response.json())
        .then(userVillagers => findUVToDelete(userVillagers, villager, currentUser, dispatch))
    }
}

export const findUVToDelete = (userVillagers, villager, currentUser, dispatch) => {
    userVillagers.find(uV => {
        if (uV.user_id === currentUser.id && uV.villager_id === villager.id) {
            fetchToDelete(uV.id, villager, dispatch)
        }
    })
}

export const fetchToDelete = (id, villager, dispatch) => {
    fetch(`http://localhost:3000/user_villagers/${id}`, {
        method: 'DELETE'
    })
    dispatch({type: 'DELETE_VILLAGER', payload: villager})
}