let defaultState = {tagsArray: [], tagFollowsArray: []}

export function tagsReducer (state = defaultState, action){
    switch(action.type){
        case 'FETCH_TAGS':
            return {
                ...state, tagsArray: [...state.tagsArray, action.payload]
            }
        case 'FETCH_TAGFOLLOWS':
            return {
                ...state, tagFollowsArray: [...state.tagFollowsArray, action.payload]
            }
        case 'CREATE_TAGFOLLOW':
            return {
                ...state, tagFollowsArray: [...state.tagFollowsArray, action.payload]
            }
        default:
            return state;   
    }
}