import {fetchVillagersForUser} from './villagerActions'
import {fetchFishForUser} from './fishActions'
import {fetchBugsForUser} from './bugActions'
import {fetchSeacreaturesForUser} from './seacreatureActions'
import {fetchFossilsForUser} from './fossilActions'

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
            fetchVillagersForUser(data.user, dispatch)
            fetchFishForUser(data.user, dispatch)
            fetchBugsForUser(data.user, dispatch)
            fetchSeacreaturesForUser(data.user, dispatch)
            fetchFossilsForUser(data.user, dispatch)
            let token = localStorage.setItem("token", data.jwt)
            localStorage.setItem("user", JSON.stringify(data.user))
            dispatch({type: 'LOGIN_USER', payload: token, currentUser: data.user})
        })
        .catch(error => console.log("error logging in:", error))
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
          let token = localStorage.getItem("token")
          localStorage.setItem("user", JSON.stringify(data.user))
          fetchVillagersForUser(data.user, dispatch)
          fetchFishForUser(data.user, dispatch)
          fetchBugsForUser(data.user, dispatch)
          fetchSeacreaturesForUser(data.user, dispatch)
          fetchFossilsForUser(data.user, dispatch)
          dispatch({type: 'SET_USER', payload: token, currentUser: data.user})
      })
      .catch(error => console.log("error setting user:", error))
    }
}

export const logOutUser = () => {
    localStorage.clear()
    return{
        type: 'LOGOUT_USER'
    }
}