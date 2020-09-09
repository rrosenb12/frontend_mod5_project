export const fetchBugs = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/bugs')
        .then(response => response.json())
        .then(bugs => dispatch({ type: 'FETCH_BUGS', payload: bugs }));
    };
}

export const fetchBugsForUser = (user, dispatch) => {
    fetch('http://localhost:3000/bugs')
    .then(response => response.json())
    .then(data => {
        fetchUserBugs(user, data, dispatch)
    })
}

export const fetchUserBugs = (user, data, dispatch) => {
    fetch('http://localhost:3000/user_bugs')
    .then(response => response.json())
    .then(userBugs => {
        let currentUserBugs = userBugs.filter(uB => uB.user_id === user.id)
        matchBugs(currentUserBugs, data, dispatch)
    })
}

export const matchBugs = (uB, data, dispatch) => {
    let bugsIds = uB.map(bug => bug.bug_id)
    data.filter(bug => bugsIds.map(id => {      
        if (bug.id === id) {
            toTheReducer(bug, dispatch)
        }
    }))
}

export const toTheReducer = (bug, dispatch) => {
    dispatch({type: 'ADD_BUG', payload: bug})
}

export const createUserBugs = (bug, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_bugs`, {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                bug_id: bug.id
            })
        })
        .then(response => response.json())
        .then(userBugsState(bug, dispatch))
    }
}

export const userBugsState = (bug, dispatch) => {
    dispatch({type: 'ADD_BUG', payload: bug})
}

export const deleteUserBug = (bug, currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/user_bugs`)
        .then(response => response.json())
        .then(userBugs => findUBToDelete(userBugs, bug, currentUser, dispatch))
    }
}

export const findUBToDelete = (userBugs, bug, currentUser, dispatch) => {
    userBugs.find(uB => {
        if (uB.user_id === currentUser.id && uB.bug_id === bug.id) {
            fetchToDelete(uB.id, bug, dispatch)
        }
    })
}

export const fetchToDelete = (id, bug, dispatch) => {
    fetch(`http://localhost:3000/user_bugs/${id}`, {
        method: 'DELETE'
    })
    dispatch({type: 'DELETE_BUG', payload: bug})
}