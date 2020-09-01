import { combineReducers } from "redux"

const defaultState = {currentUser: {}, villagersArray: [], fishArray: [], bugsArray: [], seacreaturesArray: [], fossilsArray: [], item: {}, itemClicked: false, tagsArray: []}

function userReducer(state = defaultState.currentUser, action){
    //when your action has this type, return this
    switch (action.type) {
        case 'SET_USER':
            return {...state, state: action.payload}
        case 'LOGOUT_USER':
            return {...state, state: {}}
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

function itemsReducer (state = defaultState.item, action){
    switch(action.type) {
        case 'CLICK_ITEM':
            return {
                state: {...state, item: action.payload},
                clicked: true
            }
        case 'UNCLICK_ITEM':
            return {
                clicked: false
            }
        default:
            return state;
    }
}

function tagsReducer (state = defaultState.tagsArray, action){
    switch(action.type){
        case 'FETCH_TAGS':
            return {
                state: action.tags
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
    fossils: fossilsReducer,
    items: itemsReducer,
    tags: tagsReducer
    //will be return value of combine reducers function, which returns new state object
})

export default rootReducer