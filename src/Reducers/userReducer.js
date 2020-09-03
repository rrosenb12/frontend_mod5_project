let defaultState = {currentUser: (localStorage.getItem("user")=== undefined ? null : JSON.parse(localStorage.getItem("user"))), token: localStorage.getItem("token")}

export function userReducer(state = defaultState, action){
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state, currentUser: action.currentUser, token: action.payload
            }
        case 'CREATE_USER':
            return {
                ...state, currentUser: action.currentUser, token: action.payload
            }
        case 'SET_USER':
            return state
        case 'LOGOUT_USER':
            return {
                ...state, currentUser: {}, token: null
            }
        default:
            return state;
    }
}