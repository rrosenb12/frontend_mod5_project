export const fetchFish = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/fish')
          .then(response => response.json())
          .then(fish => dispatch({ type: 'FETCH_FISH', payload: fish }));
      };
}

export const fetchFishForUser = (user, dispatch) => {
    fetch('http://localhost:3000/fish')
    .then(response => response.json())
    .then(data => {
        fetchUserFish(user, data, dispatch)
    })
}

export const fetchUserFish = (user, data, dispatch) => {
    fetch('http://localhost:3000/user_fish')
    .then(response => response.json())
    .then(userFish => {
        let currentUserFish = userFish.filter(uF => uF.user_id === user.id)
        matchfish(currentUserFish, data, dispatch)
        }
    )
}

export const matchfish = (uF, data, dispatch) => {
    let fishIds = uF.map(fish => fish.fish_id)
    data.filter(fish => fishIds.map(id => {      
        if (fish.id === id) {
            toTheReducer(fish, dispatch)
        }
    }))
}

export const toTheReducer = (fish, dispatch) => {
    dispatch({type: 'ADD_FISH', payload: fish})
}

export const createUserFish = (fish, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_fish`, {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                fish_id: fish.id
            })
        })
        .then(response => response.json())
        .then(userFishState(fish, dispatch))
    }
}

export const userFishState = (fish, dispatch) => {
    dispatch({type: 'ADD_FISH', payload: fish})
}

export const deleteUserFish = (fish, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_fish`)
        .then(response => response.json())
        .then(userFish => findUFToDelete(userFish, fish, currentUser, dispatch))
    }
}

export const findUFToDelete = (userFish, fish, currentUser, dispatch) => {
    userFish.find(uF => {
        if (uF.user_id === currentUser.id && uF.fish_id === fish.id) {
            fetchToDelete(uF.id, fish, dispatch)
        }
    })
}

export const fetchToDelete = (id, fish, dispatch) => {
    fetch(`http://localhost:3000/user_fish/${id}`, {
        method: 'DELETE'
    })
    dispatch({type: 'DELETE_FISH', payload: fish})
}