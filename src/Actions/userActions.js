export const loginUser = (userObj) => {
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
            'accepts': 'application/json',
            'content-type': 'application/json'
            },
            body: JSON.stringify({user: userObj})
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            dispatch({type: 'LOGIN_USER', payload: data.user})
        })
    }
}

export const createUser = (userObj) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            dispatch({type: 'CREATE_USER', payload: data.user})
        })
  }
}

export const setUser = (token) => {
    return (dispatch) => {
        fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => {
          dispatch({type: 'SET_USER', payload: data.user})
      })
    }
}

export const logOutUser = () => {
    return{
        type: 'LOGOUT_USER'
    }
}