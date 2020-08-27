import { combineReducers } from "redux"

const defaultState = {currentUser: {}, arrayOf: []}

function userReducer(state = defaultState.currentUser, action){
    //when your action has this type, return this
    switch (action.type) {
        case 'SET_USER':
            return {...state, state: action.payload}
        default:
            return state;
        }
}

function arrayReducer(state = defaultState.arrayOf, action){
    //when your action has this type, return this
    switch (action.type) {
        case 'ADD_Array':
            return state      
        default:
            return state;
        }
}

const rootReducer = combineReducers({
    currentUser: userReducer,
    arrayOf: arrayReducer
    //will be return value of combine reducers function, which returns new state object
})

export default rootReducer