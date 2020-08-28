import { combineReducers } from "redux"

const defaultState = {currentUser: {}, villagersArray: [], fishArray: []}

function userReducer(state = defaultState.currentUser, action){
    //when your action has this type, return this
    switch (action.type) {
        case 'SET_USER':
            return {...state, state: action.payload}
        default:
            return state;
        }
}

function villagersReducer(state = defaultState.villagersArray, action){
    switch (action.type) {
        
        case 'FETCH_VILLAGERS':
            return {
                state: action.villagers
            }
        default:
            return state;
        }
}

function fishReducer(state = defaultState.fishArray, action){
    switch (action.type) {
        case 'FETCH_FISH':
            return {
                state: action.fish 
            }
            default:
                return state;
    }
}

const rootReducer = combineReducers({
    currentUser: userReducer,
    villagers: villagersReducer, 
    fish: fishReducer,
    //will be return value of combine reducers function, which returns new state object
})

export default rootReducer