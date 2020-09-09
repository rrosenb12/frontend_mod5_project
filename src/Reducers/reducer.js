import { combineReducers } from "redux"
import {userReducer} from './userReducer'
import {villagersReducer} from './villagersReducer'
import {fishReducer} from './fishReducer'
import {bugsReducer} from './bugsReducer'
import {seacreaturesReducer} from './seacreaturesReducer'
import {fossilsReducer} from './fossilsReducer'
import {picsReducer} from './picturesReducer'
import {tagsReducer} from './tagsReducer'

const defaultState = {item: {}, itemClicked: false}

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

const rootReducer = combineReducers({
    currentUser: userReducer,
    villagers: villagersReducer, 
    fish: fishReducer,
    bugs: bugsReducer,
    seacreatures: seacreaturesReducer,
    fossils: fossilsReducer,
    items: itemsReducer,
    tags: tagsReducer,
    pictures: picsReducer
})

export default rootReducer