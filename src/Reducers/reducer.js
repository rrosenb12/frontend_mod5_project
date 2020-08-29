import { combineReducers } from "redux"

const defaultState = {currentUser: {}, villagersArray: [], fishArray: [], bugsArray: [], seacreaturesArray: [], fossilsArray: []}

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

function bugsReducer(state = defaultState.bugsArray, action){
    switch (action.type) {
        case 'FETCH_BUGS':
            return {
                state: action.bugs 
            }
            default:
                return state;
    }
}

function seacreaturesReducer(state = defaultState.seacreaturesArray, action){
    switch (action.type) {
        case 'FETCH_SEACREATURES':
            return {
                state: action.seacreatures 
            }
            default:
                return state;
    }
}

function fossilsReducer(state = defaultState.fossilsArray, action){
    switch (action.type) {
        case 'FETCH_FOSSILS':
            return {
                state: action.fossils 
            }
            default:
                return state;
    }
}

const rootReducer = combineReducers({
    currentUser: userReducer,
    villagers: villagersReducer, 
    fish: fishReducer,
    bugs: bugsReducer,
    seacreatures: seacreaturesReducer,
    fossils: fossilsReducer
    //will be return value of combine reducers function, which returns new state object
})

export default rootReducer