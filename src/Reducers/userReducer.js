let defaultState = {currentUser: localStorage.getItem("user")!== undefined && JSON.parse(localStorage.getItem("user")), token: localStorage.getItem("token")}

export function userReducer(state = defaultState, action){
    //when your action has this type, return this
    console.log(localStorage.getItem("user"))
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(state.currentUser)
            return {
                ...state, currentUser: action.currentUser, token: action.payload
            }
        case 'CREATE_USER':
            return {
                ...state, currentUser: action.payload
            }
        case 'SET_USER':
            return state
        case 'LOGOUT_USER':
            localStorage.clear()
            return {
                ...state, currentUser: {}, token: null
            }
        default:
            return state;
    }
}