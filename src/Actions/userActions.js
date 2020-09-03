import {fetchVillagersForUser} from './villagerActions'
let user;

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
            fetchVillagersForUser(data.user)
            user = data.user
            let token = localStorage.setItem("token", data.jwt)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({type: 'LOGIN_USER', payload: token, currentUser: data.user})
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
            let token = localStorage.setItem("token", data.jwt)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({type: 'CREATE_USER', payload: token, currentUser: data.user})
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
          let token = localStorage.setItem("token", data.jwt)
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({type: 'SET_USER', payload: token, currentUser: data.user})
      })
    }
}

export const logOutUser = () => {
    return{
        type: 'LOGOUT_USER'
    }
}