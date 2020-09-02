let defaultState = {token: localStorage.getItem('token'), currentUser: {}}

export function userReducer(state = defaultState, action){
    //when your action has this type, return this
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state, currentUser: action.payload
            }
        case 'SET_USER':
            return {
                ...state, state: action.payload
            }
        case 'LOGOUT_USER':
            return {
                ...state, state: {}
            }
        default:
            return state;
    }
}