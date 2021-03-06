let defaultState = {picsArray: [], pictureTagsArray: [], filteredPics: []}

export function picsReducer (state = defaultState, action){
    switch(action.type){
        case 'FETCH_PICTURES':
            return {
                ...state, picsArray: action.payload
            }
        case 'FETCH_PICTURETAGS':
            return {
                ...state, pictureTagsArray: action.payload
            }
        default:
            return state;   
    }
}