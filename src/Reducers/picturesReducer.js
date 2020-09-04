let defaultState = {picsArray: [], filteredPics: []}

export function picsReducer (state = defaultState, action){
    switch(action.type){
        case 'FETCH_PICTURES':
            return {
                ...state, picsArray: [...state.picsArray, action.pictures]
            }
        default:
            return state;   
    }
}